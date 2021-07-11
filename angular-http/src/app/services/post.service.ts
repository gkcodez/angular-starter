import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Post } from '../models/post.model';
import { catchError, map, tap } from 'rxjs/operators'
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }


  createPost(post: Post) {
    // this.posts.push();
    this.http.post("https://fb-angular-http-default-rtdb.firebaseio.com/posts.json", post,
    )
      .subscribe(postData => {
        console.log(postData);
      });
  }


  fetchPosts() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('print', 'pretty');
    queryParams = queryParams.append('key', 'value');

    return this.http.get<{ [key: string]: Post }>("https://fb-angular-http-default-rtdb.firebaseio.com/posts.json",
      {
        headers: new HttpHeaders({ 'Custom-header': 'Hello' }),
        params: queryParams,
        observe: 'body',
        responseType: 'json'
      })
      .pipe(map(postData => {
        const postsArray = [];
        for (let key in postData) {
          if (postData.hasOwnProperty(key)) {
            const title: string = postData[key]['title'];
            const content: string = postData[key]['content'];

            postsArray.push(new Post(title, content, key));
          }
        }
        return postsArray;
      }),
        catchError(error => {
          console.log(error.message);
          return throwError(error);
        })
      )

  }

  clearPosts() {
    // this.posts.push();
    return this.http.delete("https://fb-angular-http-default-rtdb.firebaseio.com/posts.json",
      { observe: 'events' })
      .pipe(tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      }))
  }
}
