import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOperationsComponent } from './liste-operations.component';

describe('ListeOperationsComponent', () => {
  let component: ListeOperationsComponent;
  let fixture: ComponentFixture<ListeOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeOperationsComponent]
    });
    fixture = TestBed.createComponent(ListeOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
