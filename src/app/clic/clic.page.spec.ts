import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicPage } from './clic.page';

describe('ClicPage', () => {
  let component: ClicPage;
  let fixture: ComponentFixture<ClicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
