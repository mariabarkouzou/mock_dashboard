import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MOCK_ARTICLES } from '../articles.mock';

const PAGE_SIZE = 3;
const SCROLL_THRESHOLD_PX = 40;

@Component({
  selector: 'app-newsfeed-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div
      class="flex flex-col justify-start items-start glass-effect z-40 rounded-lg py-4 md:px-4 px-2 gap-5 h-full overflow-hidden"
    >
      <div class="flex justify-start items-center gap-2">
        <div class="glass-effect flex justify-center items-center rounded-lg">
          <img src="assets/images/newsfeed.svg" alt="NewsFeed icon" class="h-8 w-8 object-cover" />
        </div>
        <h1 class="text-white font-bold text-lg text-left">NEWS</h1>
      </div>
      <div
        class="overflow-y-auto overscroll-contain max-h-dvh md:max-h-none min-h-0 flex-1 flex flex-col gap-5 md:pb-0 pb-50 md:pr-2 pr-1"
        (scroll)="onScroll($event)"
      >
        @for (article of visibleArticles(); track article.id) {
          <article
            class="bg-white rounded-lg flex flex-col justify-start items-start gap-2.5 pb-4 shrink-0"
          >
            <img [src]="article.image" alt="" class="rounded-tl-lg rounded-tr-lg object-contain" />
            <div class="flex flex-col justify-start items-start gap-2 px-4">
              <time [attr.datetime]="article.publishedAt" class="text-xs uppercase tracking-wide text-slate-600">
                {{ article.publishedAt | date: 'dd MMM yyyy' }}
              </time>
              <h2 class="text-slate-900 font-bold md:text-xl text-lg">{{ article.title }}</h2>
              <p class="text-slate-700 line-clamp-3">{{ article.description }}</p>

              <a
                [href]="article.actionUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-700 font-bold transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
              >
                {{ article.actionLabel }}
              </a>
            </div>
          </article>
        }
      </div>
    </div>
  `,
})
export class NewsFeedListComponent {
  protected readonly articles = MOCK_ARTICLES;
  private readonly visibleCount = signal(PAGE_SIZE);
  protected readonly visibleArticles = computed(() => this.articles.slice(0, this.visibleCount()));
  private readonly hasMore = computed(() => this.visibleCount() < this.articles.length);

  protected onScroll(event: Event): void {
    if (!this.hasMore()) return;
    const element = event.currentTarget as HTMLElement;
    const atBottom =
      element.scrollTop + element.clientHeight >= element.scrollHeight - SCROLL_THRESHOLD_PX;
    if (atBottom) {
      this.visibleCount.update((count) => Math.min(count + PAGE_SIZE, this.articles.length));
    }
  }
}
