import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DicomnodeUiComponent } from './dicomnode-ui.component';

describe('DicomnodeUiComponent', () => {
  let component: DicomnodeUiComponent;
  let fixture: ComponentFixture<DicomnodeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicomnodeUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DicomnodeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
