import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, inject, OnDestroy, viewChild } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  imports: [TranslatePipe],
  selector: 'app-header',
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnDestroy {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  readonly themeService = inject(ThemeService);

  private readonly menu = viewChild.required<ElementRef<HTMLDialogElement>>('mobileMenu');

  private previousOverflow = '';
  private scrollLocked = false;

  get currentLanguage(): string {
    return this.translate.getCurrentLang() || 'es';
  }

  openMenu(): void {
    this.menu().nativeElement.showModal();

    this.previousOverflow = this.document.body.style.overflow;
    this.document.body.style.overflow = 'hidden';
    this.scrollLocked = true;
  }

  closeMenu(): void {
    this.menu().nativeElement.close();
    this.restoreScroll();
  }

  closeOnBackdrop(event: MouseEvent): void {
    if (event.target === this.menu().nativeElement) {
      this.closeMenu();
    }
  }

  restoreScroll(): void {
    if (!this.scrollLocked) {
      return;
    }

    this.document.body.style.overflow = this.previousOverflow;
    this.scrollLocked = false;
  }

  toggleLanguage(): void {
    const nextLanguage = this.currentLanguage === 'es' ? 'en' : 'es';

    this.translate.use(nextLanguage).subscribe(() => {
      this.document.documentElement.lang = nextLanguage;
    });
  }

  ngOnDestroy(): void {
    this.restoreScroll();
  }
}
