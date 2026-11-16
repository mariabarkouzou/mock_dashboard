import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MyAccountService } from '../../../services/account.service';
import { GenericPopUpComponent } from '../generic-popup/generic-popup.component';

interface PopUpConfig {
  success: boolean;
  icon: string;
  title: string;
  description: string;
  btnLabel: string;
}

@Component({
  selector: 'app-deposit-modal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, GenericPopUpComponent],
  template: `
    <div
      class="inset fixed flex top-0 justify-center items-center w-full h-full bg-black/80 z-40"
      (click)="closeModal()"
    >
      <div
        class="glass-effect w-100 max-w-[90%] p-5 rounded-lg animate-[popupEnter_400ms_ease-in-out]"
        (click)="$event.stopPropagation()"
      >
        <div class="flex justify-between w-full items-center mb-4">
          <h1 class="text-white text-xl font-bold">DEPOSIT MODAL</h1>
          <button
            type="button"
            class="text-white flex justify-center items-center hover:text-gray-300 cursor-pointer"
            [attr.aria-label]="'Close deposit modal'"
            (click)="closeModal()"
          >
            <img src="assets/images/menu/x_icon_white.svg" alt="" class="h-6 w-6 object-cover" />
          </button>
        </div>
        <form
          (ngSubmit)="onSubmit()"
          [formGroup]="depositForm"
          class="flex flex-col gap-4 items-center justify-center w-full"
        >
          <label for="amount" class="sr-only text-white">Amount:</label>
          <input
            type="number"
            formControlName="amount"
            id="amount"
            placeholder="Amount"
            class="w-full p-2 rounded bg-gray-800 text-white placeholder:text-white mt-5 cursor-pointer"
            [ngClass]="showError(amount) ? 'mb-0' : 'mb-5'"
          />
          @if (showError(amount)) {
            <div class="text-red-400 text-sm w-full text-left">
              @if (amount.hasError('required')) {
                <p>Amount is required</p>
              }
              @if (amount.hasError('min')) {
                <p>Amount must be greater than 0</p>
              }
              @if (amount.hasError('max')) {
                <p>Amount cannot exceed 10,000</p>
              }
            </div>
          }
          <label for="method" class="sr-only text-white">Method:</label>
          <div class="relative w-full">
            <select
              formControlName="method"
              id="method"
              class="w-full p-2 rounded bg-gray-800 text-white cursor-pointer appearance-none mb-5"
            >
              @for (method of methods; track method) {
                <option [value]="method">{{ method }}</option>
              }
            </select>
            <div class="pointer-events-none absolute inset-y-0 -top-4 right-2 flex items-center">
              <svg class="h-4 w-4" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <label for="notes" class="sr-only text-white">Notes:</label>
          <textarea
            formControlName="notes"
            placeholder="Notes"
            id="notes"
            class="w-full p-2 rounded bg-gray-800 text-white placeholder:text-white cursor-pointer"
            style="width: 100%; height: 150px;"
          ></textarea>
          @if (showError(notes) && notes.hasError('maxlength')) {
            <div class="text-red-400 mt-1 text-sm w-full text-left">Notes can't exceed 350 characters</div>
          }
          <div class="w-full flex justify-end items-end py-5">
            <button
              type="submit"
              class="text-white font-bold py-2 px-4 rounded"
              [ngClass]="
                depositForm.invalid || isSubmitting()
                  ? 'cursor-not-allowed bg-gray-500'
                  : 'cursor-pointer bg-blue-500 hover:bg-blue-700'
              "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    @if (popup(); as p) {
      <app-generic-popup
        [icon]="p.icon"
        [title]="p.title"
        [description]="p.description"
        [btnLabel]="p.btnLabel"
        (btnClicked)="dismissPopUp()"
        (close)="dismissPopUp()"
      />
    }
  `,
})
export class DepositModalComponent {
  private readonly router = inject(Router);
  protected readonly popup = signal<PopUpConfig | null>(null);
  protected readonly isSubmitting = signal(false);
  private readonly myAccountService = inject(MyAccountService);
  protected readonly depositForm = inject(NonNullableFormBuilder).group({
    amount: [
      null as number | null,
      [Validators.required, Validators.min(0.01), Validators.max(10000)],
    ],
    method: ['Card', Validators.required],
    notes: ['', [Validators.maxLength(350)]],
  });
  protected readonly methods = ['Card', 'PayPal', 'Wire Transfer'] as const;
  protected readonly amount = this.depositForm.controls.amount;
  protected readonly notes = this.depositForm.controls.notes;

  protected showError(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }

  protected onSubmit() {
    if (this.depositForm.invalid) {
      this.depositForm.markAllAsTouched();
      return;
    }

    if (this.isSubmitting()) return;
    const { amount, method, notes } = this.depositForm.getRawValue();
    if (amount === null) return;
    this.isSubmitting.set(true);
    try {
      this.myAccountService.addDeposit(Number(amount), method, notes);
      this.popup.set({
        success: true,
        icon: 'assets/images/popUp/success.png',
        title: 'Deposit successful!',
        description: `Your deposit of ${amount}€ was added to your account!`,
        btnLabel: 'OK',
      });
    } catch {
      this.popup.set({
        success: false,
        icon: 'assets/images/popUp/error.png',
        title: 'Deposit failed!',
        description: `Something went wrong. Please try again.`,
        btnLabel: 'Try again',
      });
    } finally {
      this.isSubmitting.set(false);
    }
  }

  protected closeModal(): void {
    this.router.navigate(['/']);
  }

  protected dismissPopUp(): void {
    const wasSuccess = this.popup()?.success;
    this.popup.set(null);
    if (wasSuccess) this.closeModal();
  }
}
