import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  OneArtistPage } from './oneArtist.page';

describe('oneArtist', () => {
  let component: OneArtistPage;
  let fixture: ComponentFixture<OneArtistPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(OneArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

