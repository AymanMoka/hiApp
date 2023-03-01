import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/auth-tabs/auth.module').then(m => m.AuthModule) },
  { path: 'streams', canActivate: [AuthGuard], loadChildren: () => import('./components/streams/streams.module').then(m => m.StreamsModule) },
  { path: 'people', canActivate: [AuthGuard], loadChildren: () => import('./components/people/people.module').then(m => m.PeopleModule) },
  { path: 'post/:id', canActivate: [AuthGuard], loadChildren: () => import('./components/comments/comments.module').then(m => m.CommentsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
