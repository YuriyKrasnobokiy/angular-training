import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigReactiveFormComponent } from './big-reactive-form.component';

describe('BigReactiveFormComponent', () => {
  let component: BigReactiveFormComponent;
  let fixture: ComponentFixture<BigReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
