import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './component/post/post.component';
import { FeedComponent } from './pages/feed/feed.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PageTitleComponent } from './component/page-title/page-title.component';
import { NovoPostComponent } from './pages/novo-post/novo-post.component';
import { VisualizarPostComponent } from './pages/visualizar-post/visualizar-post.component';
import { ComentarioComponent } from './component/comentario/comentario.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, PostComponent, FeedComponent, NavbarComponent, PageTitleComponent, NovoPostComponent, VisualizarPostComponent, ComentarioComponent, RegistroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}