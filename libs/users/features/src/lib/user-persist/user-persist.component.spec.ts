import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPersistComponent } from './user-persist.component';

describe('UserFeaturesComponent', () => {
  let component: UserPersistComponent;
  let fixture: ComponentFixture<UserPersistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPersistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPersistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
