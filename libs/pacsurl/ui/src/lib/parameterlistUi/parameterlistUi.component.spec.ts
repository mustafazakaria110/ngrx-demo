import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParameterlistUiComponent } from './parameterlistUi.component';

describe('ParameterlistUiComponent', () => {
  let component: ParameterlistUiComponent;
  let fixture: ComponentFixture<ParameterlistUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParameterlistUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParameterlistUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
