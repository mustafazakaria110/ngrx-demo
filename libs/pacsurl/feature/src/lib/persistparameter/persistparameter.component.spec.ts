import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersitparameterComponent } from './persistparameter.component';

describe('PersitparameterComponent', () => {
  let component: PersitparameterComponent;
  let fixture: ComponentFixture<PersitparameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersitparameterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersitparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
