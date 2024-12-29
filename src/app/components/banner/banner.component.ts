import { AfterViewInit, Component } from '@angular/core';
import { InfiniteScrollingItemsComponent } from "../infinite-scrolling-items/infinite-scrolling-items.component";
import { GsapTextService } from '../../helpers/gsap/gsap-text.service';

@Component({
  selector: 'app-banner',
  imports: [InfiniteScrollingItemsComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements AfterViewInit {
  skills: string[] = ['JavaScript', 'Typescript', 'Angular', 'NgRX', 'RxJS', 'ReactJS', 'Redux', 'Zustand', 'NodeJS', 'NestJS', 'Python', 'Ai', 'ML', 'DL', 'TanStack', 'UI', 'MicroFrontends', 'MicroServices', 'Architect', 'Software', 'Web', 'Engineering']
  hashtags: string[] = ['Tech Speaker', 'Mentor', 'Author', 'Opensource'];

  constructor(
    private gsapService: GsapTextService
  ) {}

  ngAfterViewInit(): void {
    this.gsapService.titleAnimation('.heading', 100, 2, 0);
    this.gsapService.textAnimate('.sub-heading');
  }
}
