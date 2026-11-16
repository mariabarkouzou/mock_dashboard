import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Mock Trading Dashboard',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.Homepage),
    children: [
      {
        path: 'deposit',
        loadComponent: () =>
          import('./components/deposit-modal/deposit-modal.component').then(
            (m) => m.DepositModalComponent,
          ),
      },
    ],
  },
];
