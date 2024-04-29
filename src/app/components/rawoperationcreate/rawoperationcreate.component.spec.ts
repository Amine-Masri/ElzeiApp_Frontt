import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawOperationCreateComponent } from './rawoperationcreate.component';

describe('RawoperationcreateComponent', () => {
  let component: RawOperationCreateComponent;
  let fixture: ComponentFixture<RawOperationCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RawOperationCreateComponent]
    });
    fixture = TestBed.createComponent(RawOperationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
