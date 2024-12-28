import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingProjectsComponent } from './sliding-projects.component';

describe('SlidingProjectsComponent', () => {
  let component: SlidingProjectsComponent;
  let fixture: ComponentFixture<SlidingProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
