import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichierslistComponent } from './fichierslist.component';

describe('FichierslistComponent', () => {
  let component: FichierslistComponent;
  let fixture: ComponentFixture<FichierslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichierslistComponent]
    });
    fixture = TestBed.createComponent(FichierslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
