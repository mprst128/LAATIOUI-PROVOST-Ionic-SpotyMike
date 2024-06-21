import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMusicPage } from './listMusic.page';

describe('ListMusicPage', () => {
  let component: ListMusicPage;
  let fixture: ComponentFixture<ListMusicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});