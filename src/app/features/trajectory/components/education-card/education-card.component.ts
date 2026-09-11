import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Education } from '../../models/education.model';

@Component({
  imports: [TranslatePipe],
  selector: 'app-education-card',
  styleUrl: './education-card.component.scss',
  templateUrl: './education-card.component.html',
})
export class EducationCardComponent {
  readonly education = input.required<Education>();
}
