import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnotesComponent } from './listnotes.component';

describe('ListnotesComponent', () => {
  let component: ListnotesComponent;
  let fixture: ComponentFixture<ListnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
