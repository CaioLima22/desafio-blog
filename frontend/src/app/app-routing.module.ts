import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FeedComponent } from './pages/feed/feed.component';
import { NovoPostComponent } from './pages/novo-post/novo-post.component';
import { VisualizarPostComponent } from './pages/visualizar-post/visualizar-post.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'novo-post', component: NovoPostComponent },
  { path: 'post/:id', component: VisualizarPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}