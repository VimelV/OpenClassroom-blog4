import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { Subscription } from 'rxjs/internal/Subscription';
import { PostsService } from 'src/app/services/posts.service';
import {Array} from 'core-js/es6/array';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  constructor(private postService: PostsService) { }

  posts: any[];
  postSubscription: Subscription;

  lstPosts = [
    new Post('Mon premier post', 'fLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac aliquam sapien, at congue ligula. Nullam mollis, erat quis imperdiet finibus, nisl elit rutrum urna, eu sollicitudin turpis tortor in tellus. Ut libero ex, convallis in varius in, porttitor vitae nisl. Duis lobortis dignissim iaculis. Praesent hendrerit, eros sit amet efficitur gravida, risus massa sagittis neque, ut elementum lectus erat et sapien. Donec tempor molestie interdum.', 1),

    new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac aliquam sapien, at congue ligula. Nullam mollis, erat quis imperdiet finibus, nisl elit rutrum urna, eu sollicitudin turpis tortor in tellus. Ut libero ex, convallis in varius in, porttitor vitae nisl. Duis lobortis dignissim iaculis. Praesent hendrerit, eros sit amet efficitur gravida, risus massa sagittis neque, ut elementum lectus erat et sapien. Donec tempor molestie interdum.', -1),

    new Post('Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac aliquam sapien, at congue ligula. Nullam mollis, erat quis imperdiet finibus, nisl elit rutrum urna, eu sollicitudin turpis tortor in tellus. Ut libero ex, convallis in varius in, porttitor vitae nisl. Duis lobortis dignissim iaculis. Praesent hendrerit, eros sit amet efficitur gravida, risus massa sagittis neque, ut elementum lectus erat et sapien. Donec tempor molestie interdum.', 0)
  ];


  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Array<object>) => {
        this.posts = posts.reverse()
      
      }
    )

    this.postService.emmitPostSubject();
  }

}
