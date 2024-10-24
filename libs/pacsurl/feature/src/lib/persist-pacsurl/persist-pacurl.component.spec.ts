import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersistPacsurlComponent } from './persist-pacurl.component';

describe('PersistPacsurlComponent', () => {
  let component: PersistPacsurlComponent;
  let fixture: ComponentFixture<PersistPacsurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersistPacsurlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersistPacsurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
