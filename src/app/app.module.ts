import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

import { Routes } from '@angular/router/src/config';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { NewPostComponent } from './new-post/new-post.component';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HeaderComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
