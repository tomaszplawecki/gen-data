import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IbanGeneratorComponent } from './iban-generator.component';

describe('IbanGeneratorComponent', () => {
  let component: IbanGeneratorComponent;
  let fixture: ComponentFixture<IbanGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IbanGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IbanGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
