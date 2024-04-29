import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawoperationeditComponent } from './rawoperationedit.component';

describe('RawoperationeditComponent', () => {
  let component: RawoperationeditComponent;
  let fixture: ComponentFixture<RawoperationeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RawoperationeditComponent]
    });
    fixture = TestBed.createComponent(RawoperationeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
