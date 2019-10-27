import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetcvPage } from './targetcv.page';
/* Ari Martelius, 1800582 */
describe('TargetcvPage', () => {
  let component: TargetcvPage;
  let fixture: ComponentFixture<TargetcvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetcvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetcvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
