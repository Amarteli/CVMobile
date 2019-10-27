import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectworkPage } from './projectwork.page';
/* Ari Martelius, 1800582 */
describe('ProjectworkPage', () => {
  let component: ProjectworkPage;
  let fixture: ComponentFixture<ProjectworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectworkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
