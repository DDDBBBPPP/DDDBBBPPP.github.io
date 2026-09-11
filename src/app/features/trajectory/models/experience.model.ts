export interface Experience {
  id: string;
  company: string;
  titleKey: string;
  periodKey: string;
  stages: {
    titleKey: string;
    descriptionKey: string;
  }[];
}
