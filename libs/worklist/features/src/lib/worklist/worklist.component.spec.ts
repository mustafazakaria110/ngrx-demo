import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorklistFeatureComponent } from './worklist-feature.component';

describe('WorklistFeatureComponent', () => {
  let component: WorklistFeatureComponent;
  let fixture: ComponentFixture<WorklistFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorklistFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorklistFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
