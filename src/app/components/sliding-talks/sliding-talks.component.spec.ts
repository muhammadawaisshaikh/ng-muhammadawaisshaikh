import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingTalksComponent } from './sliding-talks.component';

describe('SlidingTalksComponent', () => {
  let component: SlidingTalksComponent;
  let fixture: ComponentFixture<SlidingTalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingTalksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
