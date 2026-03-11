import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Game } from '../../core/models/game.model';
import { GameService } from '../../core/services/game.service';
import { fadeIn, slideUp } from '../../shared/animations/animations';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: [fadeIn, slideUp],
  template: `
    @if (game(); as g) {
      <div class="p-6 lg:p-8" @fadeIn>
        <!-- Back link -->
        <a
          routerLink="/dashboard"
          class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-6"
        >
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Games
        </a>

        <!-- Game container (Unity WebGL placeholder) -->
        <div
          class="w-full aspect-video rounded-2xl overflow-hidden relative mb-8"
          [style.background]="g.gradient"
        >
          @if (g.thumbnail) {
            <img
              [src]="g.thumbnail"
              [alt]="g.title"
              class="w-full h-full object-cover"
            />
          }
          <div class="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
            <div class="w-20 h-20 rounded-3xl glass-strong flex items-center justify-center">
              <svg class="w-10 h-10 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </div>
            <div class="text-center">
              <p class="text-white/80 font-medium">Unity WebGL Game</p>
              <p class="text-white/40 text-sm mt-1">Game content will load here</p>
            </div>
          </div>
        </div>

        <!-- Game info -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" @slideUp>
          <!-- Main info -->
          <div class="lg:col-span-2 space-y-6">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <h1 class="text-3xl font-bold tracking-tight text-gray-100">{{ g.title }}</h1>
                <span class="px-3 py-1 text-xs font-medium rounded-lg bg-primary-500/10 text-primary-400 border border-primary-500/20">
                  {{ g.genre }}
                </span>
              </div>
              <p class="text-gray-400 leading-relaxed">{{ g.description }}</p>
            </div>

            <!-- Action buttons -->
            <div class="flex items-center gap-3">
              <button
                disabled
                class="px-8 py-3 bg-primary-500/50 text-surface-950/80 font-semibold rounded-xl cursor-not-allowed text-sm"
              >
                Play Game — Coming Soon
              </button>
              <button class="px-6 py-3 bg-surface-800 hover:bg-surface-700 text-gray-200 font-medium rounded-xl border border-surface-700 hover:border-surface-600 transition-all text-sm cursor-pointer">
                Add to Wishlist
              </button>
            </div>
          </div>

          <!-- Stats sidebar -->
          <div class="space-y-4">
            <div class="glass rounded-2xl p-5 space-y-4">
              <h3 class="text-sm font-semibold text-gray-300">Game Stats</h3>

              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Rating</span>
                  <div class="flex items-center gap-1.5">
                    <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span class="text-sm font-medium text-gray-200">{{ g.rating }}</span>
                  </div>
                </div>

                <div class="h-px bg-surface-800/50"></div>

                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Players</span>
                  <span class="text-sm font-medium text-gray-200">{{ g.playerCount | number }}</span>
                </div>

                <div class="h-px bg-surface-800/50"></div>

                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Genre</span>
                  <span class="text-sm font-medium text-gray-200">{{ g.genre }}</span>
                </div>

                <div class="h-px bg-surface-800/50"></div>

                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">Status</span>
                  <span class="text-xs font-medium px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>

            <!-- Score placeholder -->
            <div class="glass rounded-2xl p-5 space-y-3">
              <h3 class="text-sm font-semibold text-gray-300">Your Score</h3>
              <div class="text-center py-4">
                <div class="text-4xl font-bold text-gray-600">—</div>
                <p class="text-xs text-gray-600 mt-2">Play the game to set your score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    } @else if (loading()) {
      <div class="flex items-center justify-center min-h-[60vh]">
        <div class="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin"></div>
      </div>
    } @else {
      <div class="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <h2 class="text-xl font-semibold text-gray-300 mb-2">Game not found</h2>
        <p class="text-sm text-gray-500 mb-6">The game you're looking for doesn't exist.</p>
        <a routerLink="/dashboard" class="text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors">
          ← Back to Dashboard
        </a>
      </div>
    }
  `
})
export class GameDetailComponent implements OnInit {
  readonly game = signal<Game | undefined>(undefined);
  readonly loading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gameService.getGameById(id).subscribe(game => {
        this.game.set(game);
        this.loading.set(false);
      });
    } else {
      this.loading.set(false);
    }
  }
}
