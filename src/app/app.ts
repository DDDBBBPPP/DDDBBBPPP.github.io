import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './features/hero/hero.component';

@Component({
  imports: [RouterOutlet, HeaderComponent, HeroComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
