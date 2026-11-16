import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

export interface HeaderComponentProps {
  title?: string;
  logoSrc?: string;
  navigationLinks?: { label: string; path: string }[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  styles: [
    `
      @media (max-width: 768px) {
        nav {
          display: none;
        }
        .burger-menu {
          display: flex;
        }
      }
      .active-link {
        font-weight: bold;
        color: red;
      }
    `,
  ],
  template: `
    <div class="relative w-full">
      <header class="flex items-center justify-between px-5 py-3 text-white w-full">
        <button
          class="flex justify-center items-center"
          (click)="navigateTo('/home')"
          [attr.aria-label]="'Go Home'"
        >
          <img
            [src]="logoSrc || 'assets/images/menu/logo.png'"
            alt="Logo icon"
            class="h-14 cursor-pointer"
          />
        </button>

        <!-- Menu -->

        <nav class="flex space-x-20 w-full h-full justify-center items-center">
          @for (navItem of navigationLinks; track navItem.label) {
            <a
              class="text-white text-xl hover:text-gray-300 cursor-pointer"
              routerLinkActive="active-link"
              [routerLink]="navItem.path"
              >{{ navItem.label }}</a
            >
          }
        </nav>
        <button
          class="flex items-center justify-center"
          (click)="openMenu()"
          [attr.aria-label]="'Open menu'"
        >
          <img
            src="assets/images/menu/menu_icon.svg"
            alt="Hamburger menu icon"
            class="h-10 hidden w-auto burger-menu cursor-pointer"
          />
        </button>
      </header>
    </div>
    @if (openNewsFeedSignal()) {
      <div class="fixed top-0 right-0 w-1/2 h-full bg-black p-4 z-10">
        <button [attr.aria-label]="'Close menu'" (click)="closeMenu()">
          <img
            src="assets/images/menu/x_icon_white.svg"
            alt="X icon"
            class="h-8 cursor-pointer self-end float-right"
          />
        </button>
      </div>
    }
  `,
})
export class NavbarComponent {
  private readonly router = inject(Router);
  readonly openNewsFeedSignal = signal(false);
  @Input() logoSrc?: string;
  @Input() navigationLinks: { label: string; path: string }[] = [];

  constructor() {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  openMenu(): void {
    this.openNewsFeedSignal.set(true);
  }

  closeMenu(): void {
    this.openNewsFeedSignal.set(false);
  }
}
