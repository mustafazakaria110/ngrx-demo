import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PacsListComponent } from './pacs-list.component';

describe('PacsListComponent', () => {
  let component: PacsListComponent;
  let fixture: ComponentFixture<PacsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PacsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
