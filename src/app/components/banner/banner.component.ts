import { Component } from '@angular/core';
import { InfiniteScrollingItemsComponent } from "../infinite-scrolling-items/infinite-scrolling-items.component";

@Component({
  selector: 'app-banner',
  imports: [InfiniteScrollingItemsComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  skills: string[] = ['JavaScript', 'Typescript', 'Angular', 'NgRX', 'RxJS', 'ReactJS', 'Redux', 'Zustand', 'NodeJS', 'NestJS', 'Python', 'Ai', 'ML', 'DL', 'TanStack', 'UI', 'MicroFrontends', 'MicroServices', 'Architect', 'Software', 'Web', 'Engineering']
  hashtags: string[] = ['Tech Speaker', 'Mentor', 'Author', 'Opensource'];

}
