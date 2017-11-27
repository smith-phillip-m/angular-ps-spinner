/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CogComponent } from './cog.component';

describe('CogComponent', () => {
  let component: CogComponent;
  let fixture: ComponentFixture<CogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
