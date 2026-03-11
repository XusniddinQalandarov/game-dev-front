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
    <section class="relative min-h-[90vh] flex items-center overflow-hidden" (mousemove)="onMouseMove($event)">
      <!-- Hero background image with parallax -->
      <div 
        class="absolute inset-[-5%] transition-transform duration-[800ms] ease-out will-change-transform"
        [style.transform]="bgTransform()"
      >
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
    <section class="py-32 bg-surface-950 relative border-y border-white/5">
      <div class="max-w-7xl mx-auto px-6 w-full mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 class="text-3xl md:text-5xl font-medium text-gray-100 tracking-tight leading-tight">
          How it works. <br><span class="text-gray-500">Simple and fast.</span>
        </h2>
        <p class="text-gray-400 text-lg max-w-sm">
          Everything you need to set up your profile and start playing educational games, simplified.
        </p>
      </div>

      <div class="max-w-7xl mx-auto px-6 w-full">
        <div class="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
          
          <!-- Step 1 -->
          <div class="pt-8 pb-12 md:pr-12 md:pb-0 border-b md:border-b-0 md:border-r border-white/10">
            <div class="text-xs font-mono text-gray-500 mb-8">01</div>
            <h3 class="text-xl font-medium text-gray-100 mb-3 tracking-tight">Create Profile</h3>
            <p class="text-gray-400 leading-relaxed">
              Sign up securely with your school email. No complicated onboarding or credit cards required. Get instant access to the platform.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="pt-8 pb-12 md:px-12 md:pb-0 border-b md:border-b-0 md:border-r border-white/10">
            <div class="text-xs font-mono text-gray-500 mb-8">02</div>
            <h3 class="text-xl font-medium text-gray-100 mb-3 tracking-tight">Select a Game</h3>
            <p class="text-gray-400 leading-relaxed">
               Choose from a curated collection of educational games covering math, science, and coding. Load them straight from the cloud.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="pt-8 pb-12 md:pl-12 md:pb-0">
            <div class="text-xs font-mono text-gray-500 mb-8">03</div>
            <h3 class="text-xl font-medium text-gray-100 mb-3 tracking-tight">Play & Compete</h3>
            <p class="text-gray-400 leading-relaxed">
               Launch instantly in your browser. Earn achievements, track progress, and challenge your classmates on the leaderboards.
            </p>
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
            <div class="relative h-full bg-surface-950/60 rounded-[23px] group-hover:bg-surface-950/40 transition-all duration-500 overflow-hidden">
              <!-- Background Icon -->
              <svg class="absolute -bottom-8 -right-8 w-40 h-40 text-primary-500/10 group-hover:text-primary-500/20 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <!-- Content -->
              <div class="relative p-8 flex flex-col items-start z-10">
                <h3 class="text-2xl font-bold text-gray-100 mb-4 group-hover:text-primary-300 transition-colors mt-2">Instant Action</h3>
                <p class="text-gray-400 leading-relaxed text-base font-medium">Dive straight into the action with zero downloads. Our cloud-optimized engine delivers silky-smooth gameplay directly to your browser.</p>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="group relative rounded-3xl p-[1px] bg-gradient-to-b from-surface-800 to-surface-900/50 hover:from-blue-500/50 hover:to-cyan-500/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-blue-500/20 lg:-translate-y-4">
            <div class="absolute inset-0 bg-surface-950/80 backdrop-blur-xl transition-all duration-500"></div>
            <div class="relative h-full bg-surface-950/60 rounded-[23px] group-hover:bg-surface-950/40 transition-all duration-500 overflow-hidden">
              <!-- Background Icon -->
              <svg class="absolute -bottom-8 -right-8 w-40 h-40 text-blue-500/10 group-hover:text-blue-500/20 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
              <!-- Content -->
              <div class="relative p-8 flex flex-col items-start z-10">
                <h3 class="text-2xl font-bold text-gray-100 mb-4 group-hover:text-blue-300 transition-colors mt-2">School Approved</h3>
                <p class="text-gray-400 leading-relaxed text-base font-medium">Carefully curated and 100% ad-free. Mekan Games is built from the ground up to be a safe, distraction-free environment for students.</p>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="group relative rounded-3xl p-[1px] bg-gradient-to-b from-surface-800 to-surface-900/50 hover:from-purple-500/50 hover:to-pink-500/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-purple-500/20">
            <div class="absolute inset-0 bg-surface-950/80 backdrop-blur-xl transition-all duration-500"></div>
            <div class="relative h-full bg-surface-950/60 rounded-[23px] group-hover:bg-surface-950/40 transition-all duration-500 overflow-hidden">
              <!-- Background Icon -->
              <svg class="absolute -bottom-8 -right-8 w-40 h-40 text-purple-500/10 group-hover:text-purple-500/20 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
              <!-- Content -->
              <div class="relative p-8 flex flex-col items-start z-10">
                <h3 class="text-2xl font-bold text-gray-100 mb-4 group-hover:text-purple-300 transition-colors mt-2">Hidden Learning</h3>
                <p class="text-gray-400 leading-relaxed text-base font-medium">Master math, science, and coding through immersive gameplay. You'll be having too much fun to realize you're actually doing homework.</p>
              </div>
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
  readonly bgTransform = signal('translate(0px, 0px)');

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => {
      this.featuredGames.set(games.slice(0, 4));
    });
  }

  onMouseMove(event: MouseEvent) {
    const x = (window.innerWidth / 2 - event.clientX) / 40;
    const y = (window.innerHeight / 2 - event.clientY) / 40;
    this.bgTransform.set(`translate(${x}px, ${y}px)`);
  }
}
