import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersistpacsurlComponent } from './pesistpacs.component';

describe('PersistpacsurlComponent', () => {
  let component: PersistpacsurlComponent;
  let fixture: ComponentFixture<PersistpacsurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersistpacsurlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersistpacsurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
