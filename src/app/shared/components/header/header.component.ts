import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="h-16 border-b border-surface-800/50 flex items-center justify-between px-6 bg-surface-950/80 backdrop-blur-lg sticky top-0 z-20">
      <!-- Search -->
      <div class="relative max-w-md w-full">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          type="text"
          [placeholder]="searchPlaceholder()"
          (input)="onSearch($event)"
          class="w-full pl-10 pr-4 py-2 bg-surface-900/50 border border-surface-800/50 rounded-xl text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-primary-500/40 focus:ring-1 focus:ring-primary-500/20 transition-all"
        />
      </div>

      <!-- Right -->
      <div class="flex items-center gap-4 ml-4">
        <!-- Notification bell -->
        <button class="relative w-9 h-9 rounded-xl bg-surface-900/50 border border-surface-800/50 flex items-center justify-center text-gray-500 hover:text-gray-300 hover:border-surface-700 transition-all cursor-pointer">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          <span class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary-500 rounded-full"></span>
        </button>

        <!-- User avatar -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-xs font-semibold text-white">
            {{ userInitial }}
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  readonly searchPlaceholder = input('Search games...');
  readonly search = output<string>();

  private auth = {} as AuthService;

  get userInitial(): string {
    return 'U';
  }

  constructor(auth: AuthService) {
    this.auth = auth;
  }

  get userName(): string {
    const user = this.auth.user();
    return user?.name ?? 'User';
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }
}
