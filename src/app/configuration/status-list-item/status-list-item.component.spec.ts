import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusListItemComponent } from './status-list-item.component';

describe('StatusListItemComponent', () => {
  let component: StatusListItemComponent;
  let fixture: ComponentFixture<StatusListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusListItemComponent]
    });
    fixture = TestBed.createComponent(StatusListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
