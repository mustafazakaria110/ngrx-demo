import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParameterlistComponent } from './paramaterlist.component';

describe('ParameterlistComponent', () => {
  let component: ParameterlistComponent;
  let fixture: ComponentFixture<ParameterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParameterlistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParameterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
