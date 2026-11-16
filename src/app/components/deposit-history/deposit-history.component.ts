import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MyAccountService } from '../../../services/account.service';

@Component({
  selector: 'app-deposit-history',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div
      class="flex flex-col justify-start items-start glass-effect z-40 rounded-lg p-4 gap-5 max-w-310"
      [ngClass]="
        account.deposits().length === 0 ? 'overflow-y-hidden h-auto' : 'overflow-y-scroll h-full'
      "
    >
      <div class="flex justify-start items-center gap-2">
        <div class="glass-effect flex justify-center items-center rounded-lg">
          <img src="assets/images/deposit.svg" alt="Wallet icon" class="h-8 w-8 object-cover" />
        </div>
        <h1 class="text-white font-bold text-lg">DEPOSIT HISTORY WIDGET</h1>
      </div>
      @for (deposit of account.deposits(); track deposit) {
        <div
          class="w-full rounded-lg glass-effect flex flex-col justify-start items-start gap-3 p-4"
        >
          <div class="flex gap-4 items-center">
            <div class="text-white font-bold md:text-xl text-lg">Date:</div>
            <div class="text-white md:text-lg text-base">
              {{ deposit.date | date: 'EEEE, d MMM y' }}
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="text-white font-bold md:text-xl text-lg">Amount:</div>
            <div class="text-white md:text-lg text-base">
              {{ deposit.amount | currency: 'EUR' }}
            </div>
          </div>
          <div class="flex gap-4 items-center">
            <div class="text-white font-bold md:text-xl text-lg">Deposit Method:</div>
            <div class="text-white md:text-lg text-base">{{ deposit.method }}</div>
          </div>
          <div class="flex gap-4 items-start">
            <div class="text-white font-bold md:text-xl text-lg">Notes:</div>
            <div class="text-white md:text-lg text-base">{{ deposit.notes }}</div>
          </div>
        </div>
      } @empty {
        <div class="text-white my-5 font-bold text-base text-center w-full">
          There is no previous deposit history
        </div>
      }
    </div>
  `,
})
export class DepositHistoryComponent {
  protected readonly account = inject(MyAccountService);
}
