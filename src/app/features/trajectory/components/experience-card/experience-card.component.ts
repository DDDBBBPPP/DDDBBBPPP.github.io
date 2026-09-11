import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Experience } from '../../models/experience.model';

@Component({
  imports: [TranslatePipe],
  selector: 'app-experience-card',
  styleUrl: './experience-card.component.scss',
  templateUrl: './experience-card.component.html',
})
export class ExperienceCardComponent {
  readonly experience = input.required<Experience>();
}
