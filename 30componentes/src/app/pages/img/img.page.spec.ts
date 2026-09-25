import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgPage } from './img.page';

describe('ImgPage', () => {
  let component: ImgPage;
  let fixture: ComponentFixture<ImgPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
