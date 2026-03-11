import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="min-h-screen bg-surface-950">
      <app-sidebar />
      <div class="lg:ml-[260px] min-h-screen">
        <router-outlet />
      </div>
    </div>
  `
})
export class AppLayoutComponent {}
