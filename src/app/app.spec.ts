import { TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideTranslateService({ lang: 'es' })],
    }).compileComponents();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    document.documentElement.removeAttribute('data-theme');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the name only in the hero as the single h1', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('h1')).toHaveLength(1);
    expect(compiled.querySelector('app-hero h1')?.textContent).toBe('David Bellón Payer');
    expect(compiled.querySelector('app-header')?.textContent).not.toContain('David Bellón');
  });
});
