import { Component, computed, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-hero',
  styleUrl: './hero.component.scss',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  private readonly translate = inject(TranslateService);

  readonly cvUrl = computed(() =>
    this.translate.currentLang() === 'en'
      ? 'cv/david-bellon-cv-en.pdf'
      : 'cv/david-bellon-cv-es.pdf',
  );
}
