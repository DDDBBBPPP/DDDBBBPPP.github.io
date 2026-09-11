import { DOCUMENT, Service, inject, signal } from '@angular/core';

type Theme = 'light' | 'dark';

@Service()
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'portfolio-theme';
  private readonly currentTheme = signal<Theme>('light');

  readonly theme = this.currentTheme.asReadonly();

  constructor() {
    let savedTheme: string | null = null;

    try {
      savedTheme = localStorage.getItem(this.storageKey);
    } catch {
      // El navegador puede impedir el acceso al almacenamiento.
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme: Theme =
      savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : prefersDark ? 'dark' : 'light';

    this.applyTheme(initialTheme);
  }

  toggleTheme(): void {
    const nextTheme = this.theme() === 'light' ? 'dark' : 'light';

    this.applyTheme(nextTheme);

    try {
      localStorage.setItem(this.storageKey, nextTheme);
    } catch {
      // El cambio sigue funcionando aunque no pueda guardarse.
    }
  }

  private applyTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    this.document.documentElement.setAttribute('data-theme', theme);
  }
}
