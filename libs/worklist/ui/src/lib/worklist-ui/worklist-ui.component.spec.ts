import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorklistUiComponent } from './worklist-ui.component';

describe('WorklistUiComponent', () => {
  let component: WorklistUiComponent;
  let fixture: ComponentFixture<WorklistUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorklistUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorklistUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
