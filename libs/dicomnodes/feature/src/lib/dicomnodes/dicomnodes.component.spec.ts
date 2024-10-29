/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DicomnodesComponent } from './dicomnodes.component';

describe('DicomnodesComponent', () => {
  let component: DicomnodesComponent;
  let fixture: ComponentFixture<DicomnodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicomnodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicomnodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
