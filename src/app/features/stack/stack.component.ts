import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { stackCategories } from './data/stack.data';

@Component({
  imports: [TranslatePipe],
  selector: 'app-stack',
  styleUrl: './stack.component.scss',
  templateUrl: './stack.component.html',
})
export class StackComponent {
  readonly categories = stackCategories;
}
