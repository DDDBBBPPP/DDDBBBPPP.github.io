import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioProject, projects } from './data/projects.data';

@Component({
  imports: [TranslatePipe],
  selector: 'app-projects',
  styleUrl: './projects.component.scss',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  private readonly document = inject(DOCUMENT);
  private readonly imageDialog = viewChild<ElementRef<HTMLDialogElement>>('imageDialog');

  readonly projects = projects;
  readonly selectedImages = signal<Record<string, number>>({});
  readonly modalProject = signal<PortfolioProject | null>(null);
  readonly modalImageIndex = signal(0);

  private lastFocusedElement: HTMLElement | null = null;

  selectedImageIndex(projectId: string): number {
    return this.selectedImages()[projectId] ?? 0;
  }

  selectImage(projectId: string, imageIndex: number): void {
    this.selectedImages.update((selectedImages) => ({
      ...selectedImages,
      [projectId]: imageIndex,
    }));
  }

  showPreviousImage(projectId: string, imageCount: number): void {
    const currentIndex = this.selectedImageIndex(projectId);
    this.selectImage(projectId, (currentIndex - 1 + imageCount) % imageCount);
  }

  showNextImage(projectId: string, imageCount: number): void {
    const currentIndex = this.selectedImageIndex(projectId);
    this.selectImage(projectId, (currentIndex + 1) % imageCount);
  }

  openImage(project: PortfolioProject): void {
    this.lastFocusedElement = this.document.activeElement as HTMLElement | null;
    this.modalProject.set(project);
    this.modalImageIndex.set(this.selectedImageIndex(project.id));
    this.document.defaultView?.setTimeout(() => this.imageDialog()?.nativeElement.showModal());
  }

  closeImage(): void {
    this.imageDialog()?.nativeElement.close();
  }

  closeOnBackdrop(event: MouseEvent): void {
    if (event.target === this.imageDialog()?.nativeElement) {
      this.closeImage();
    }
  }

  handleDialogKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeImage();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.showPreviousModalImage();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.showNextModalImage();
    }
  }

  restoreFocus(): void {
    this.modalProject.set(null);
    this.lastFocusedElement?.focus();
    this.lastFocusedElement = null;
  }

  showPreviousModalImage(): void {
    const project = this.modalProject();
    if (!project) {
      return;
    }

    this.modalImageIndex.update(
      (currentIndex) => (currentIndex - 1 + project.images.length) % project.images.length,
    );
  }

  showNextModalImage(): void {
    const project = this.modalProject();
    if (!project) {
      return;
    }

    this.modalImageIndex.update((currentIndex) => (currentIndex + 1) % project.images.length);
  }
}
