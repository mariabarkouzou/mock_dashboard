import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-generic-popup',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div
      class="inset fixed flex top-0 justify-center items-center w-full h-full bg-black/80 z-40"
      (click)="close.emit()"
    >
      <div
        class="glass-effect w-100 max-w-[90%] p-5 rounded-lg animate-[popupEnter_400ms_ease-in-out]"
        (click)="$event.stopPropagation()"
      >
        <div class="flex justify-end w-full items-center mb-4">
          <button
            type="button"
            class="text-white flex justify-center items-center hover:text-gray-300 cursor-pointer"
            [attr.aria-label]="'Close deposit modal'"
            (click)="close.emit()"
          >
            <img src="assets/images/menu/x_icon_white.svg" alt="" class="h-6 w-6 object-cover" />
          </button>
        </div>

        <div class="flex flex-col w-full justify-center items-center px-5">
          @if (icon()) {
            <img [src]="icon()" alt="" class="h-20 w-20 object-cover" />
          }
          @if (title()) {
            <h1 class="text-white font-bold text-2xl text-center my-2">{{ title() }}</h1>
          }
          @if (description()) {
            <p class="text-white text-base text-center mb-10">{{ description() }}</p>
          }
          <button
            type="button"
            class="text-white font-bold py-2 cursor-pointer bg-blue-500 hover:bg-blue-700 px-8 rounded-lg"
            [attr.aria-label]="'Close popup'"
            (click)="btnClicked.emit()"
          >
            {{ btnLabel() }}
          </button>
        </div>
      </div>
    </div>
  `,
})
export class GenericPopUpComponent {
  readonly icon = input('');
  readonly title = input('');
  readonly description = input('');
  readonly btnLabel = input('');
  readonly btnClicked = output<void>();
  readonly close = output<void>();
}
