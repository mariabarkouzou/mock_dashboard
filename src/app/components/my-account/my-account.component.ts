import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MyAccountService } from '../../../services/account.service';

@Component({
  selector: 'app-my-account',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div
      class="flex flex-col items-start justify-start w-full pt-4 pb-10 px-6 z-10 rounded-lg glass-effect"
    >
      <div class="flex md:flex-row flex-col md:mb-0 mb-2 justify-between items-start gap-2 w-full">
        <div class="flex items-center justify-start gap-2">
          <div class="glass-effect flex justify-center items-center rounded-lg">
            <img
              src="assets/images/my_account.svg"
              alt="My account icon"
              class="h-8 w-8 object-cover"
            />
          </div>
          <h1 class="uppercase text-white font-bold text-lg">My Account</h1>
        </div>
        <div class="text-white font-bold md:text-4xl text-2xl">
          {{ account.balance() | currency: 'EUR' }}
        </div>
      </div>
      <button
        class="bg-white flex justify-center items-center py-2 px-10 text-black cursor-pointer font-bold text-xl rounded-lg mt-4 hover:bg-white/75 transition duration-150 ease-in-out hover:scale-110"
        [routerLink]="'/deposit'"
        [attr.aria-label]="'Open deposit modal'"
      >
        <span>Deposit</span>
      </button>
    </div>
  `,
})
export class MyAccountComponent {
  protected readonly account = inject(MyAccountService);
}
