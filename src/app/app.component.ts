import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GsapGlobalService } from './helpers/gsap/gsap-global.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'muhammad-awais-shaikh';

  constructor(
    private gsapGlobalService: GsapGlobalService
  ) {}

  ngOnInit(): void {
    this.gsapGlobalService.registerGSAP();
  }
}
