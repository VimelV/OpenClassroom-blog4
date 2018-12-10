import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
/*  @Input() postTitre: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate = new Date();*/

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLoveIt(post: Post){
    this.postsService.likePost(post);
   // post.loveIts++;
    //this.postLoveIts++ ;
  }

  onDontLoveIt(post: Post){
    this.postsService.nbDislikePost(post);
  //  post.loveIts--;
    //this.postLoveIts-- ;
  }

  onDeleteIt(post: Post){
    this.postsService.deletePost(post);
  }
}
