import { Injectable, NgModule } from '@angular/core';
import { Post } from 'src/app/model/post';
import { Subject } from 'rxjs/internal/Subject';
import {Array} from 'core-js/es6/array';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  postsSubject = new Subject<any[]>();
  
  private posts: Array<object> = [
    {
      title: 'mon premier post',
      content: 'pppLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi. Nam erat lacus, feugiat pharetra commodo ut, ornare et nibh. Donec nec leo hendrerit,',
      loveIts: -4,
      created_at: new Date()
    },
    {
      title: 'mon deuxieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi. Nam erat lacus, feugiat pharetra commodo ut, ornare et nibh. Donec nec leo hendrerit,',
      loveIts: 3,
      created_at: new Date()
    },
    {
      title: 'un nouveau post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa nulla, congue et urna non, efficitur malesuada justo. Nulla iaculis nibh quis nisi consequat, a tristique ipsum maximus. Nulla facilisi. Sed porta, tellus hendrerit elementum sagittis, diam turpis pharetra mauris, non varius velit ipsum eu nisi. Nunc nisl augue, aliquet molestie aliquet a, rutrum eget leo. Nam in placerat mauris. Cras non dui mi. Nam erat lacus, feugiat pharetra commodo ut, ornare et nibh. Donec nec leo hendrerit,',
      loveIts: 0,
      created_at: new Date()
    }
  ]
  
  emmitPostSubject() {
    this.postsSubject.next(this.posts.slice())
  }

  addPost(post: Post) {
    this.posts.push(post)
    console.log(this.posts);
  }

  nbDislikePost(post: Post) {
    post.loveIts--;
  }

  likePost(post: Post) {
    post.loveIts++;
  }

  deletePost(post: Post) {
    this.posts.splice(this.posts.findIndex(postObj => postObj === post), 1)
    this.emmitPostSubject()
  }
}
