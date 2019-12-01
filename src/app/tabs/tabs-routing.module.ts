import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
/* Ari Martelius, 1800582
  Here navigation is handled, all needed pages are added here.
  About -page is set to be default.  */
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        {
          path: 'targetcv',
          children:
            [
              {
                path: '',
                loadChildren: '../targetcv/targetcv.module#TargetcvPageModule'
              }
            ]
        },
        {
          path: 'projectwork',
          children:
            [
              {
                path: '',
                loadChildren: '../projectwork/projectwork.module#ProjectworkPageModule'
              }
            ]
        },
        {
          path: 'register',
          children:
            [
              {
                path: '',
                loadChildren: '../register/register.module#RegisterPageModule'
              }
            ]
        },
        {
          path: 'extracurr',
          children:
            [
              {
                path: '',
                loadChildren: '../extracurr/extracurr.module#ExtracurrPageModule'
              }
            ]
        },
        {
            path: 'about',
            children:
              [
                {
                  path: '',
                  loadChildren: 'src/app/about/about.module#AboutPageModule'
                }
              ]
          },
          {
            path: 'contactinfo',
            children:
              [
                {
                  path: '',
                  loadChildren: '../contactinfo/contactinfo.module#ContactinfoPageModule'
                }
              ]
          },
        {
          path: '',
          redirectTo: '/tabs/about',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/tabs/about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}
