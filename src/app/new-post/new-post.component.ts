import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postService: PostsService) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  onSubmitForm() {
    const title = this.postForm.get('title').value ;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title, content, 0);
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }


}
