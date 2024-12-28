import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingExperiencesComponent } from './sliding-experiences.component';

describe('SlidingExperiencesComponent', () => {
  let component: SlidingExperiencesComponent;
  let fixture: ComponentFixture<SlidingExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingExperiencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
