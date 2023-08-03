import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBlockComponent } from './status-block.component';

describe('StatusBlockComponent', () => {
  let component: StatusBlockComponent;
  let fixture: ComponentFixture<StatusBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusBlockComponent]
    });
    fixture = TestBed.createComponent(StatusBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
