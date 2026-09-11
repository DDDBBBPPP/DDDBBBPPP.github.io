import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { experiences, education } from './data/trajectory.data';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';

@Component({
  imports: [EducationCardComponent, ExperienceCardComponent, TranslatePipe],
  selector: 'app-trajectory',
  styleUrl: './trajectory.component.scss',
  templateUrl: './trajectory.component.html',
})
export class TrajectoryComponent {
  readonly experiences = experiences;
  readonly education = education;
}
