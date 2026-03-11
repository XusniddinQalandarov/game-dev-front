import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Game } from '../../../core/models/game.model';
import { cardHover } from '../../animations/animations';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: [cardHover],
  template: `
    <a
      [routerLink]="['/games', game().id]"
      class="group block rounded-2xl overflow-hidden bg-surface-900/80 border border-surface-800/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 cursor-pointer"
      [@cardHover]="hovered() ? 'hovered' : 'idle'"
      (mouseenter)="hovered.set(true)"
      (mouseleave)="hovered.set(false)"
    >
      <!-- Thumbnail -->
      <div
        class="aspect-[16/10] w-full relative overflow-hidden"
        [style.background]="game().gradient"
      >
        @if (game().thumbnail) {
          <img
            [src]="game().thumbnail"
            [alt]="game().title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        }
        <div class="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-surface-900/20 to-transparent"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </div>
        </div>
        <!-- Genre badge -->
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 text-xs font-medium rounded-lg bg-black/40 backdrop-blur-sm text-white/80 border border-white/10">
            {{ game().genre }}
          </span>
        </div>
      </div>

      <!-- Info -->
      <div class="p-4 space-y-2.5">
        <div class="flex items-start justify-between gap-2">
          <h3 class="font-semibold text-gray-100 truncate group-hover:text-primary-400 transition-colors">
            {{ game().title }}
          </h3>
          <div class="flex items-center gap-1 shrink-0">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-xs text-gray-400">{{ game().rating }}</span>
          </div>
        </div>

        <p class="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {{ game().description }}
        </p>

        <div class="flex items-center justify-between pt-1">
          <div class="flex items-center gap-1.5 text-xs text-gray-500">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
            </svg>
            {{ formatPlayers(game().playerCount) }} players
          </div>
          <span class="text-xs font-medium text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Play →
          </span>
        </div>
      </div>
    </a>
  `
})
export class GameCardComponent {
  readonly game = input.required<Game>();
  readonly hovered = signal(false);

  formatPlayers(count: number): string {
    if (count >= 1000) {
      return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return count.toString();
  }
}
