import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { fadeInScale } from '../../shared/animations/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  animations: [fadeInScale],
  template: `
    <div class="min-h-screen flex bg-surface-950">
      
      <!-- Left Panel: Graphic & Branding -->
      <div class="hidden lg:flex w-1/2 relative bg-surface-900 overflow-hidden">
        
        <!-- High End Gaming Image -->
        <div class="absolute inset-0 bg-[url('/images/gaming-setup.png')] bg-cover bg-center"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent opacity-80 mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-surface-950/20"></div>
      </div>

      <!-- Right Panel: Auth Form -->
      <div class="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 relative">
        <div class="w-full max-w-[380px]" @fadeInScale>
          
          <!-- Mobile Logo (hidden on lg) -->
          <div class="lg:hidden mb-12 flex justify-start">
            <a routerLink="/" class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
                <svg class="w-6 h-6 text-surface-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              </div>
            </a>
          </div>

          <!-- Header -->
          <div class="mb-10 text-left">
            <h1 class="text-3xl font-semibold tracking-tight text-gray-100 mb-2">
              {{ isLogin() ? 'Sign in to Mekan' : 'Create an Account' }}
            </h1>
            <p class="text-[15px] text-gray-500">
              {{ isLogin() ? 'Welcome back! Please enter your details.' : 'Join the platform and start playing.' }}
            </p>
          </div>

          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-5">
            <!-- Email -->
            <div>
              <label for="email" class="block text-[13px] font-medium text-gray-300 mb-1.5">Email *</label>
              <input
                id="email"
                type="email"
                formControlName="email"
                placeholder="you@example.com"
                class="w-full px-4 py-2.5 bg-surface-950 border border-surface-800 focus:border-surface-600 rounded-lg text-sm text-gray-100 placeholder:text-gray-600 transition-colors focus:outline-none focus:ring-1 focus:ring-surface-600"
                [class.border-red-500]="isFieldInvalid('email')"
                [class.focus:border-red-500]="isFieldInvalid('email')"
                [class.focus:ring-red-500]="isFieldInvalid('email')"
              />
              @if (isFieldInvalid('email')) {
                <p class="mt-1.5 text-xs text-red-400">
                  @if (form.get('email')?.hasError('required')) {
                    Email is required
                  } @else {
                    Enter a valid email address
                  }
                </p>
              }
            </div>

            <!-- Password -->
            <div>
              <label for="password" class="flex items-center justify-between text-[13px] font-medium text-gray-300 mb-1.5">
                <span>Password *</span>
                @if (isLogin()) {
                  <a href="#" class="text-primary-400 hover:text-primary-300 transition-colors focus:outline-none">Forgot password?</a>
                }
              </label>
              <input
                id="password"
                type="password"
                formControlName="password"
                placeholder="••••••••"
                class="w-full px-4 py-2.5 bg-surface-950 border border-surface-800 focus:border-surface-600 rounded-lg text-sm text-gray-100 placeholder:text-gray-600 transition-colors focus:outline-none focus:ring-1 focus:ring-surface-600"
                [class.border-red-500]="isFieldInvalid('password')"
                [class.focus:border-red-500]="isFieldInvalid('password')"
                [class.focus:ring-red-500]="isFieldInvalid('password')"
              />
              @if (isFieldInvalid('password')) {
                <p class="mt-1.5 text-xs text-red-400">
                  @if (form.get('password')?.hasError('required')) {
                    Password is required
                  } @else {
                    Password must be at least 6 characters
                  }
                </p>
              }
            </div>

            <!-- Notice about mocks -->
            <div class="flex items-start gap-2 pt-2">
              <svg class="w-4 h-4 text-primary-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-[12px] text-gray-400 leading-snug">
                Mock credentials <span class="text-white">admin&#64;mekangames.com</span> and <span class="text-white">password123</span> are pre-filled so you can quickly test.
              </p>
            </div>

            <!-- Error message -->
            @if (error()) {
              <div class="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-[13px] text-red-400 mt-2">
                {{ error() }}
              </div>
            }

            <!-- Submit -->
            <button
              type="submit"
              [disabled]="loading() || form.invalid"
              class="w-full py-2.5 mt-4 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-colors text-sm shadow-sm"
            >
              @if (loading()) {
                <span class="inline-flex items-center justify-center gap-2">
                  <svg class="animate-spin w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Processing...
                </span>
              } @else {
                {{ isLogin() ? 'Sign In' : 'Create Account' }}
              }
            </button>
          </form>

          <!-- Toggle -->
          <p class="text-left text-[13px] text-gray-500 mt-8">
            {{ isLogin() ? "Don't have an account?" : "Already have an account?" }}
            <button 
              type="button" 
              (click)="toggleMode()"
              class="text-white font-medium transition-colors ml-1 focus:outline-none hover:underline"
            >
              {{ isLogin() ? 'Sign up' : 'Log in' }}
            </button>
          </p>

        </div>
      </div>
    
    </div>
  `
})
export class LoginComponent {
  readonly form: FormGroup;
  readonly loading = signal(false);
  readonly error = signal('');
  readonly isLogin = signal(true);

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    // Pre-filled with mock credentials for immediate testing
    this.form = this.fb.group({
      email: ['admin@mekangames.com', [Validators.required, Validators.email]],
      password: ['password123', [Validators.required, Validators.minLength(6)]]
    });
  }

  toggleMode(): void {
    this.isLogin.set(!this.isLogin());
    this.error.set('');
  }

  isFieldInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.error.set('');

    const { email, password } = this.form.value;

    // Simulate async login/signup
    setTimeout(() => {
      const success = this.auth.login(email, password);
      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.error.set('Invalid credentials. Please try again.');
      }
      this.loading.set(false);
    }, 1000);
  }
}
