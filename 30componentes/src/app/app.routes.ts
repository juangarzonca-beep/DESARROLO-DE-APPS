import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'accordion',
    loadComponent: () => import('./pages/accordion/accordion.page').then( m => m.AccordionPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./pages/action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'badge',
    loadComponent: () => import('./pages/badge/badge.page').then( m => m.BadgePage)
  },
  {
    path: 'button',
    loadComponent: () => import('./pages/button/button.page').then( m => m.ButtonPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card.page').then( m => m.CardPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'chip',
    loadComponent: () => import('./pages/chip/chip.page').then( m => m.ChipPage)
  },
  {
    path: 'datetime',
    loadComponent: () => import('./pages/datetime/datetime.page').then( m => m.DatetimePage)
  },
  {
    path: 'fab',
    loadComponent: () => import('./pages/fab/fab.page').then( m => m.FabPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./pages/grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'icon',
    loadComponent: () => import('./pages/icon/icon.page').then( m => m.IconPage)
  },
  {
    path: 'img',
    loadComponent: () => import('./pages/img/img.page').then( m => m.ImgPage)
  },
  {
    path: 'input',
    loadComponent: () => import('./pages/input/input.page').then( m => m.InputPage)
  },
  {
    path: 'item',
    loadComponent: () => import('./pages/item/item.page').then( m => m.ItemPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'popover',
    loadComponent: () => import('./pages/popover/popover.page').then( m => m.PopoverPage)
  },
  {
    path: 'progress-bar',
    loadComponent: () => import('./pages/progress-bar/progress-bar.page').then( m => m.ProgressBarPage)
  },
  {
    path: 'radio',
    loadComponent: () => import('./pages/radio/radio.page').then( m => m.RadioPage)
  },
  {
    path: 'range',
    loadComponent: () => import('./pages/range/range.page').then( m => m.RangePage)
  },
  {
    path: 'searchbar',
    loadComponent: () => import('./pages/searchbar/searchbar.page').then( m => m.SearchbarPage)
  },
  {
    path: 'segment',
    loadComponent: () => import('./pages/segment/segment.page').then( m => m.SegmentPage)
  },
  {
    path: 'select',
    loadComponent: () => import('./pages/select/select.page').then( m => m.SelectPage)
  },
  {
    path: 'spinner',
    loadComponent: () => import('./pages/spinner/spinner.page').then( m => m.SpinnerPage)
  },
  {
    path: 'tabs-demo',
    loadComponent: () => import('./pages/tabs-demo/tabs-demo.page').then( m => m.TabsDemoPage)
  },
  {
    path: 'textarea',
    loadComponent: () => import('./pages/textarea/textarea.page').then( m => m.TextareaPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./pages/toast/toast.page').then( m => m.ToastPage)
  },
];
