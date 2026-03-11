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
    <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-16 relative">
      <!-- Background effects -->
      <div class="absolute inset-0 mesh-gradient opacity-40"></div>

      <div class="relative w-full max-w-[420px]" @fadeInScale>
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-100 mb-2">Welcome back</h1>
          <p class="text-sm text-gray-500">Sign in to your Mekan Games account</p>
        </div>

        <!-- Card -->
        <div class="glass-strong rounded-2xl p-8">
          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-5">
            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                formControlName="email"
                placeholder="you@example.com"
                class="w-full px-4 py-3 bg-surface-900/80 border rounded-xl text-sm text-gray-100 placeholder:text-gray-600 transition-all duration-200 focus:outline-none"
                [class.border-surface-700]="!isFieldInvalid('email')"
                [class.focus:border-primary-500]="!isFieldInvalid('email')"
                [class.focus:ring-1]="!isFieldInvalid('email')"
                [class.focus:ring-primary-500/20]="!isFieldInvalid('email')"
                [class.border-red-500/50]="isFieldInvalid('email')"
                [class.ring-1]="isFieldInvalid('email')"
                [class.ring-red-500/20]="isFieldInvalid('email')"
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
              <label for="password" class="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
              <input
                id="password"
                type="password"
                formControlName="password"
                placeholder="••••••••"
                class="w-full px-4 py-3 bg-surface-900/80 border rounded-xl text-sm text-gray-100 placeholder:text-gray-600 transition-all duration-200 focus:outline-none"
                [class.border-surface-700]="!isFieldInvalid('password')"
                [class.focus:border-primary-500]="!isFieldInvalid('password')"
                [class.focus:ring-1]="!isFieldInvalid('password')"
                [class.focus:ring-primary-500/20]="!isFieldInvalid('password')"
                [class.border-red-500/50]="isFieldInvalid('password')"
                [class.ring-1]="isFieldInvalid('password')"
                [class.ring-red-500/20]="isFieldInvalid('password')"
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

            <!-- Error message -->
            @if (error()) {
              <div class="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                {{ error() }}
              </div>
            }

            <!-- Submit -->
            <button
              type="submit"
              [disabled]="loading()"
              class="w-full py-3 bg-primary-500 hover:bg-primary-400 disabled:opacity-50 disabled:cursor-not-allowed text-surface-950 font-semibold rounded-xl transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 text-sm cursor-pointer"
            >
              @if (loading()) {
                <span class="inline-flex items-center gap-2">
                  <svg class="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Signing in...
                </span>
              } @else {
                Sign In
              }
            </button>
          </form>

          <!-- Divider -->
          <div class="flex items-center gap-3 my-6">
            <div class="flex-1 h-px bg-surface-700/50"></div>
            <span class="text-xs text-gray-600">or</span>
            <div class="flex-1 h-px bg-surface-700/50"></div>
          </div>

          <!-- Create account -->
          <p class="text-center text-sm text-gray-500">
            Don't have an account?
            <a href="#" class="text-primary-400 hover:text-primary-300 font-medium transition-colors ml-1">
              Create one
            </a>
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

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
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

    // Simulate async login
    setTimeout(() => {
      const success = this.auth.login(email, password);
      if (success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.error.set('Invalid credentials. Please try again.');
      }
      this.loading.set(false);
    }, 800);
  }
}
