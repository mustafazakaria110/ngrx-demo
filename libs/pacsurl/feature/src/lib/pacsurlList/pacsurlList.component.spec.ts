import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PacsurlListComponent } from './pacsurlList.component';

describe('PacsurlListComponent', () => {
  let component: PacsurlListComponent;
  let fixture: ComponentFixture<PacsurlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacsurlListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PacsurlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
