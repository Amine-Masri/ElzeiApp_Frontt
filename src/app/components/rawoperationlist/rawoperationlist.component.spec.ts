/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RawoperationlistComponent } from './rawoperationlist.component';

describe('RawoperationlistComponent', () => {
  let component: RawoperationlistComponent;
  let fixture: ComponentFixture<RawoperationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawoperationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawoperationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
