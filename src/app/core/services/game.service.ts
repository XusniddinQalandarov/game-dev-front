import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Game } from '../models/game.model';
import { MOCK_GAMES } from '../data/mock-games';

@Injectable({ providedIn: 'root' })
export class GameService {
  getGames(): Observable<Game[]> {
    return of(MOCK_GAMES).pipe(delay(300));
  }

  getGameById(id: string): Observable<Game | undefined> {
    return of(MOCK_GAMES.find(g => g.id === id)).pipe(delay(200));
  }

  searchGames(query: string): Observable<Game[]> {
    const q = query.toLowerCase();
    const filtered = MOCK_GAMES.filter(
      g => g.title.toLowerCase().includes(q) || g.genre.toLowerCase().includes(q)
    );
    return of(filtered).pipe(delay(100));
  }
}
