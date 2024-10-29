import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeselGeneratorComponent } from './pesel-generator.component';

describe('PeselGeneratorComponent', () => {
  let component: PeselGeneratorComponent;
  let fixture: ComponentFixture<PeselGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeselGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeselGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
