import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Post } from './models/post.model';
import { map } from 'rxjs/operators'
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("postsForm") postsForm: FormGroup;
  posts: Post[] = [];
  fetchingPosts: boolean = false;
  error: any;

  constructor(private http: HttpClient, private postService: PostService) { }
  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost() {
    const post: Post = new Post(this.postsForm.value.title, this.postsForm.value.content)
    // this.posts.push();
    this.postService.createPost(post);

  }

  onFetchPosts() {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.fetchingPosts = true;
    this.postService.fetchPosts()
      .subscribe(posts => {
        this.posts = posts;
        this.fetchingPosts = false;
      }, error => {
        this.fetchingPosts = false;
        this.error = error;
      })
  }

  hideErrorMessage() {
    this.error = null;
    this.fetchingPosts = false;
  }

  clearPosts() {
    this.postService.clearPosts()
      .subscribe(postData => {
        this.posts = [];
      })
  }
}
