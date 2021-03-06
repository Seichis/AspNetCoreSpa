import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Lazy async modules
  {
    path: 'login', loadChildren: './account/+login/login.module#LoginModule'
  },
  {
    path: 'register', loadChildren: './account/+register/register.module#RegisterModule'
  },
  {
    path: 'createaccount', loadChildren: './account/+create/create.module#CreateAccountModule'
  },
  {
    path: 'profile', loadChildren: './account/+profile/profile.module#ProfileModule'
  },
  {
    path: 'chat', loadChildren: './+chat/chat.module#ChatModule'
  },
  {
    path: 'examples', loadChildren: './+examples/examples.module#ExamplesModule'
  }
];

export const routing = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  // enableTracing: true
});
