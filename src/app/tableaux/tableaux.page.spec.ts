import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauxPage } from './tableaux.page';

describe('TableauxPage', () => {
  let component: TableauxPage;
  let fixture: ComponentFixture<TableauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
