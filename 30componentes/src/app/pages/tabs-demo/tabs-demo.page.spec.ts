import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsDemoPage } from './tabs-demo.page';

describe('TabsDemoPage', () => {
  let component: TabsDemoPage;
  let fixture: ComponentFixture<TabsDemoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
