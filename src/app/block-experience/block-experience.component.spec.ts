import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockExperienceComponent } from './block-experience.component';

describe('BlockExperienceComponent', () => {
  let component: BlockExperienceComponent;
  let fixture: ComponentFixture<BlockExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
