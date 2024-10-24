import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDomainComponent } from './user-domain.component';

describe('UserDomainComponent', () => {
  let component: UserDomainComponent;
  let fixture: ComponentFixture<UserDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
