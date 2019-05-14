import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelPage } from './ngmodel.page';

describe('NgmodelPage', () => {
  let component: NgmodelPage;
  let fixture: ComponentFixture<NgmodelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmodelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
