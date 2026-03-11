import { Component, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { GameCardComponent } from '../../shared/components/game-card/game-card.component';
import { GameService } from '../../core/services/game.service';
import { Game } from '../../core/models/game.model';
import { staggerList, slideUp } from '../../shared/animations/animations';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, GameCardComponent],
  animations: [staggerList, slideUp],
  template: `
    <app-header (search)="onSearch($event)" />

    <div class="p-6 lg:p-8" @slideUp>
      <!-- Header section -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-100 mb-1">Games</h1>
        <p class="text-sm text-gray-500">
          {{ filteredGames().length }} {{ filteredGames().length === 1 ? 'game' : 'games' }} available
        </p>
      </div>

      <!-- Genre filters -->
      <div class="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        @for (genre of genres(); track genre) {
          <button
            (click)="selectedGenre.set(genre)"
            class="px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer"
            [class.bg-primary-500]="selectedGenre() === genre"
            [class.text-surface-950]="selectedGenre() === genre"
            [class.bg-surface-800/50]="selectedGenre() !== genre"
            [class.text-gray-400]="selectedGenre() !== genre"
            [class.hover:bg-surface-800]="selectedGenre() !== genre"
            [class.hover:text-gray-200]="selectedGenre() !== genre"
            [class.border]="selectedGenre() !== genre"
            [class.border-surface-700/50]="selectedGenre() !== genre"
          >
            {{ genre }}
          </button>
        }
      </div>

      <!-- Game grid -->
      @if (filteredGames().length > 0) {
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" [@staggerList]="filteredGames().length">
          @for (game of filteredGames(); track game.id) {
            <app-game-card [game]="game" />
          }
        </div>
      } @else {
        <!-- Empty state -->
        <div class="flex flex-col items-center justify-center py-24 text-center">
          <div class="w-16 h-16 rounded-2xl bg-surface-800/50 flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-300 mb-1">No games found</h3>
          <p class="text-sm text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      }
    </div>
  `
})
export class DashboardComponent implements OnInit {
  private readonly allGames = signal<Game[]>([]);
  private readonly searchQuery = signal('');
  readonly selectedGenre = signal('All');

  readonly genres = computed(() => {
    const genreSet = new Set(this.allGames().map(g => g.genre));
    return ['All', ...Array.from(genreSet).sort()];
  });

  readonly filteredGames = computed(() => {
    let games = this.allGames();
    const query = this.searchQuery().toLowerCase();
    const genre = this.selectedGenre();

    if (query) {
      games = games.filter(g =>
        g.title.toLowerCase().includes(query) ||
        g.genre.toLowerCase().includes(query) ||
        g.description.toLowerCase().includes(query)
      );
    }

    if (genre !== 'All') {
      games = games.filter(g => g.genre === genre);
    }

    return games;
  });

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => {
      this.allGames.set(games);
    });
  }

  onSearch(query: string): void {
    this.searchQuery.set(query);
  }
}
