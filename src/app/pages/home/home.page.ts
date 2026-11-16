import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyAccountComponent } from '../../components/my-account/my-account.component';
import { DepositHistoryComponent } from '../../components/deposit-history/deposit-history.component';
import { NewsFeedListComponent } from '../../components/newsfeed/newsfeed-list/newsfeed-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MyAccountComponent,
    RouterOutlet,
    DepositHistoryComponent,
    NewsFeedListComponent,
  ],
  styles: [
    `
      @media (max-width: 768px) {
        .burger-menu {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    `,
  ],
  template: `
    <div class="relative flex flex-col h-dvh gap-5 py-5 justify-start items-center w-full">
      <!-- Header Section -->
      <div class="flex justify-center items-start w-full px-4 gap-3">
        <h1 class="text-white md:text-3xl font-bold w-full text-left md:text-center text-xl">
          Trade With Us Today, Stay for a Lifetime
        </h1>
        <!-- Burger menu only displayed on mobile view -->
        <button
          class="burger-menu hidden cursor-pointer"
          (click)="openMenu()"
          [attr.aria-label]="'Open menu'"
        >
          <img
            src="assets/images/menu/menu_icon.svg"
            alt="Hamburger menu icon"
            class="h-8 w-8 object-cover"
          />
        </button>
      </div>
      <!-- My Account Section -->
      <div class="md:px-10 px-4 w-full max-w-400">
        <app-my-account></app-my-account>
      </div>
      <div class="flex w-full md:px-10 px-4 gap-5 max-w-400 h-full overflow-hidden">
        <!-- Deposit History Section -->
        <div class="md:w-2/3 w-full">
          <app-deposit-history></app-deposit-history>
        </div>
        <!-- Newsfeed Section on Web view-->
        <div class="md:w-1/3 w-full md:block hidden">
          <app-newsfeed-list></app-newsfeed-list>
        </div>
      </div>
    </div>
    <!-- NewsFeed Section on mobile view-->
    @if (openNewsFeedSignal()) {
      <div
        class="fixed top-0 right-0 w-2/3 h-full glass-effect py-4 px-1 z-10 flex flex-col gap-4 rounded-tl-lg rounded-bl-lg animate-[slideInRight_400ms_ease-in-out]"
      >
        <button
          [attr.aria-label]="'Close menu'"
          (click)="closeMenu()"
          class="cursor-pointer self-end"
        >
          <img
            src="assets/images/menu/x_icon_white.svg"
            alt="X icon"
            class="h-8 w-8 object-cover"
          />
        </button>
        <div class="pb-10">
          <app-newsfeed-list></app-newsfeed-list>
        </div>
      </div>
    }
    <router-outlet></router-outlet>
  `,
})
export class Homepage {
  readonly openNewsFeedSignal = signal(false);

  openMenu(): void {
    this.openNewsFeedSignal.set(true);
  }
  closeMenu(): void {
    this.openNewsFeedSignal.set(false);
  }
}
