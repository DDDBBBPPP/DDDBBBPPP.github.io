import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';

export const experiences: Experience[] = [
  {
    id: 'silice-pau',
    company: 'Sílice',
    titleKey: 'trajectory.experience.silice.title',
    periodKey: 'trajectory.experience.silice.period',
    stages: [
      {
        titleKey: 'trajectory.experience.silice.conversational.title',
        descriptionKey: 'trajectory.experience.silice.conversational.description',
      },
      {
        titleKey: 'trajectory.experience.silice.frontend.title',
        descriptionKey: 'trajectory.experience.silice.frontend.description',
      },
    ],
  },
];

export const education: Education[] = [
  {
    id: 'cpifp-alan-turing',
    institution: 'CPIFP Alan Turing',
    location: 'Campanillas / Málaga',
    titleKey: 'trajectory.education.daw.title',
    periodKey: 'trajectory.education.daw.period',
    descriptionKey: 'trajectory.education.daw.description',
  },
];
