import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 bg-surface-950/60 backdrop-blur-xl border-b border-surface-800/30">
      <a routerLink="/" class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
          <svg class="w-5 h-5 text-surface-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
          </svg>
        </div>
        <span class="text-lg font-bold tracking-tight text-gray-100">Mekan Games</span>
      </a>

      <div class="flex items-center gap-3">
        <a
          routerLink="/login"
          class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors"
        >
          Login
        </a>
        <a
          routerLink="/dashboard"
          class="px-4 py-2 text-sm font-medium bg-primary-500 hover:bg-primary-400 text-surface-950 rounded-xl transition-all shadow-lg shadow-primary-500/20"
        >
          Play Games
        </a>
      </div>
    </nav>

    <!-- Content -->
    <main class="pt-16">
      <router-outlet />
    </main>
  `
})
export class PublicLayoutComponent {}
