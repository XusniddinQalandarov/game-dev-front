import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GameCardComponent } from '../../shared/components/game-card/game-card.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { GameService } from '../../core/services/game.service';
import { Game } from '../../core/models/game.model';
import { fadeIn, slideUp, staggerList } from '../../shared/animations/animations';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, GameCardComponent, FooterComponent],
  animations: [fadeIn, slideUp, staggerList],
  template: `
    <!-- Hero -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden">
      <!-- Hero background image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop"
          alt="Gaming background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-surface-950/80 via-surface-950/70 to-surface-950"></div>
      </div>

      <div class="absolute inset-0 mesh-gradient opacity-40"></div>

      <div class="relative max-w-7xl mx-auto px-6 py-24" @slideUp>
        <div class="max-w-3xl">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
            Built for Students
          </div>

          <!-- Headline -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-100 mb-6 leading-[1.1]">
            Learn. Play.<br>
            <span class="gradient-text">Level Up.</span>
          </h1>

          <p class="text-lg sm:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
            Mekan Games is the school gaming platform where students play fun educational games right in the browser. No downloads, no distractions — just learning through play.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-start gap-4">
            <a
              routerLink="/dashboard"
              class="px-8 py-4 bg-primary-500 hover:bg-primary-400 text-surface-950 font-semibold rounded-xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 text-base"
            >
              Start Playing Free →
            </a>
            <a
              routerLink="/login"
              class="px-8 py-4 bg-white/5 hover:bg-white/10 text-gray-200 font-medium rounded-xl border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all text-base"
            >
              Sign In
            </a>
          </div>
        </div>

        <!-- Stats -->
        <div class="flex items-center gap-8 sm:gap-12 mt-16">
          <div>
            <div class="text-2xl sm:text-3xl font-bold text-gray-100">10+</div>
            <div class="text-sm text-gray-400 mt-1">Games</div>
          </div>
          <div class="w-px h-10 bg-white/10"></div>
          <div>
            <div class="text-2xl sm:text-3xl font-bold text-gray-100">5k+</div>
            <div class="text-sm text-gray-400 mt-1">Students</div>
          </div>
          <div class="w-px h-10 bg-white/10"></div>
          <div>
            <div class="text-2xl sm:text-3xl font-bold text-gray-100">100%</div>
            <div class="text-sm text-gray-400 mt-1">Free</div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-28 bg-surface-950 relative overflow-hidden">
      <!-- Decorative background blobs -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]"></div>

      <div class="max-w-7xl mx-auto px-6 relative">
        <div class="text-center mb-20" @slideUp>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Simple & Easy
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-gray-100 mb-4">
            How Mekan Games Works
          </h2>
          <p class="text-gray-400 max-w-lg mx-auto text-lg">
            Three easy steps to start having fun. It's that simple.
          </p>
        </div>

        <!-- Steps with connecting line -->
        <div class="relative">
          <!-- Connecting line (desktop only) -->
          <div class="hidden md:block absolute top-[72px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-gradient-to-r from-primary-500/40 via-emerald-400/40 to-primary-500/40"></div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            <!-- Step 1 -->
            <div class="relative group">
              <div class="flex flex-col items-center text-center">
                <!-- Number circle -->
                <div class="relative z-10 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-primary-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
                  </svg>
                </div>
                <!-- Step number tag -->
                <div class="absolute top-0 right-1/2 translate-x-[52px] -translate-y-1 w-6 h-6 rounded-full bg-surface-800 border-2 border-primary-500 flex items-center justify-center z-20">
                  <span class="text-[10px] font-bold text-primary-400">1</span>
                </div>
                <!-- Content card -->
                <div class="p-6 rounded-2xl bg-surface-900/50 border border-surface-800/50 hover:border-primary-500/20 transition-all duration-300 w-full">
                  <h3 class="text-xl font-bold text-gray-100 mb-3">Create Your Profile</h3>
                  <p class="text-gray-400 leading-relaxed">Sign up with your school email in seconds. No credit card, no fees — just pick a username and you're in.</p>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="relative group">
              <div class="flex flex-col items-center text-center">
                <div class="relative z-10 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
                <div class="absolute top-0 right-1/2 translate-x-[52px] -translate-y-1 w-6 h-6 rounded-full bg-surface-800 border-2 border-blue-500 flex items-center justify-center z-20">
                  <span class="text-[10px] font-bold text-blue-400">2</span>
                </div>
                <div class="p-6 rounded-2xl bg-surface-900/50 border border-surface-800/50 hover:border-blue-500/20 transition-all duration-300 w-full">
                  <h3 class="text-xl font-bold text-gray-100 mb-3">Pick a Game</h3>
                  <p class="text-gray-400 leading-relaxed">Browse games by subject — math, science, coding, art. Find the perfect game for your mood and skill level.</p>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="relative group">
              <div class="flex flex-col items-center text-center">
                <div class="relative z-10 w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-shadow duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                  </svg>
                </div>
                <div class="absolute top-0 right-1/2 translate-x-[52px] -translate-y-1 w-6 h-6 rounded-full bg-surface-800 border-2 border-purple-500 flex items-center justify-center z-20">
                  <span class="text-[10px] font-bold text-purple-400">3</span>
                </div>
                <div class="p-6 rounded-2xl bg-surface-900/50 border border-surface-800/50 hover:border-purple-500/20 transition-all duration-300 w-full">
                  <h3 class="text-xl font-bold text-gray-100 mb-3">Play & Learn</h3>
                  <p class="text-gray-400 leading-relaxed">Hit play and games load instantly in your browser. Track your progress, earn achievements, and compete with classmates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Games -->
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1920&h=600&fit=crop"
          alt="Tech background"
          class="w-full h-full object-cover opacity-[0.07]"
        />
      </div>
      <div class="absolute inset-0 bg-surface-950/95"></div>

      <div class="relative max-w-7xl mx-auto px-6">
        <div class="flex items-end justify-between mb-10">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Popular Now
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100 mb-2">
              Featured Games
            </h2>
            <p class="text-gray-400">Handpicked by teachers and loved by students.</p>
          </div>
          <a routerLink="/dashboard" class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-primary-400 hover:text-surface-950 hover:bg-primary-500 border border-primary-500/30 hover:border-primary-500 rounded-xl transition-all duration-200">
            View All Games →
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" [@staggerList]="featuredGames().length">
          @for (game of featuredGames(); track game.id) {
            <app-game-card [game]="game" />
          }
        </div>
      </div>
    </section>

    <!-- Why Choose Mekan Games -->
    <section class="py-32 bg-surface-950 relative overflow-hidden">
      <!-- Glow Effects -->
      <div class="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-24">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-900 border border-surface-800 shadow-xl mb-6">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-xs font-semibold uppercase tracking-widest text-emerald-400">Why Choose Us</span>
          </div>
          <h2 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 drop-shadow-sm">
            Experience the Future of Learning
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            We blend stunning game mechanics with educational content to keep you engaged, motivated, and always leveling up.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="group relative rounded-3xl p-[1px] bg-gradient-to-b from-surface-800 to-surface-900/50 hover:from-primary-500/50 hover:to-emerald-500/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-primary-500/20">
            <div class="absolute inset-0 bg-surface-950/80 backdrop-blur-xl transition-all duration-500"></div>
            <div class="relative p-8 h-full flex flex-col items-start bg-surface-950/60 rounded-[23px] group-hover:bg-surface-950/40 transition-all duration-500">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-surface-800 to-surface-900 flex items-center justify-center mb-8 border border-surface-700 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <svg class="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-100 mb-4 group-hover:text-primary-300 transition-colors">Instant Action</h3>
              <p class="text-gray-400 leading-relaxed text-base font-medium">Dive straight into the action with zero downloads. Our cloud-optimized engine delivers silky-smooth gameplay directly to your browser.</p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="group relative rounded-3xl p-[1px] bg-gradient-to-b from-surface-800 to-surface-900/50 hover:from-blue-500/50 hover:to-cyan-500/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-blue-500/20 lg:-translate-y-4">
            <div class="absolute inset-0 bg-surface-950/80 backdrop-blur-xl transition-all duration-500"></div>
            <div class="relative p-8 h-full flex flex-col items-start bg-surface-950/60 rounded-[23px] group-hover:bg-surface-950/40 transition-all duration-500">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-surface-800 to-surface-900 flex items-center justify-center mb-8 border border-surface-700 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <svg class="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-100 mb-4 group-hover:text-blue-300 transition-colors">School Approved</h3>
              <p class="text-gray-400 leading-relaxed text-base font-medium">Carefully curated and 100% ad-free. Mekan Games is built from the ground up to be a safe, distraction-free environment for students.</p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="group relative rounded-3xl p-[1px] bg-gradient-to-b from-surface-800 to-surface-900/50 hover:from-purple-500/50 hover:to-pink-500/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-purple-500/20">
            <div class="absolute inset-0 bg-surface-950/80 backdrop-blur-xl transition-all duration-500"></div>
            <div class="relative p-8 h-full flex flex-col items-start bg-surface-950/60 rounded-[23px] group-hover:bg-surface-950/40 transition-all duration-500">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-surface-800 to-surface-900 flex items-center justify-center mb-8 border border-surface-700 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <svg class="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-100 mb-4 group-hover:text-purple-300 transition-colors">Hidden Learning</h3>
              <p class="text-gray-400 leading-relaxed text-base font-medium">Master math, science, and coding through immersive gameplay. You'll be having too much fun to realize you're actually doing homework.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=600&fit=crop"
          alt="Gaming setup"
          class="w-full h-full object-cover opacity-10"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-surface-950/95 to-primary-900/20"></div>
      <div class="relative max-w-3xl mx-auto px-6 text-center">
        <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-gray-100 mb-4">
          Ready to Play?
        </h2>
        <p class="text-gray-400 mb-8 max-w-md mx-auto text-lg">
          Join thousands of students already learning through play on Mekan Games. It's free forever.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            routerLink="/dashboard"
            class="px-8 py-4 bg-primary-500 hover:bg-primary-400 text-surface-950 font-semibold rounded-xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 text-base"
          >
            Get Started — It's Free
          </a>
          <a
            routerLink="/login"
            class="px-8 py-4 text-gray-300 hover:text-gray-100 font-medium transition-colors text-base"
          >
            Already have an account? →
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <app-footer />
  `
})
export class LandingPageComponent implements OnInit {
  readonly featuredGames = signal<Game[]>([]);

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => {
      this.featuredGames.set(games.slice(0, 4));
    });
  }
}
