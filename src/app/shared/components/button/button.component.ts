import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type()"
      [disabled]="disabled()"
      [class]="buttonClasses()"
      class="inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:ring-offset-2 focus:ring-offset-surface-950 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <ng-content />
    </button>
  `
})
export class ButtonComponent {
  readonly variant = input<'primary' | 'secondary' | 'ghost'>('primary');
  readonly size = input<'sm' | 'md' | 'lg'>('md');
  readonly type = input<'button' | 'submit'>('button');
  readonly disabled = input(false);
  readonly fullWidth = input(false);

  buttonClasses(): string {
    const variants: Record<string, string> = {
      primary: 'bg-primary-500 hover:bg-primary-400 text-surface-950 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30',
      secondary: 'bg-surface-800 hover:bg-surface-700 text-gray-100 border border-surface-700 hover:border-surface-600',
      ghost: 'bg-transparent hover:bg-surface-800/50 text-gray-300 hover:text-gray-100'
    };

    const sizes: Record<string, string> = {
      sm: 'px-3.5 py-1.5 text-sm gap-1.5',
      md: 'px-5 py-2.5 text-sm gap-2',
      lg: 'px-7 py-3.5 text-base gap-2.5'
    };

    return [
      variants[this.variant()],
      sizes[this.size()],
      this.fullWidth() ? 'w-full' : ''
    ].join(' ');
  }
}
