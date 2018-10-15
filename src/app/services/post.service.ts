import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Post } from '../models/post.model';

const httpOptions = { // <- Place outside class right below imports
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class PostService {

  private postsUrl = 'http://127.0.0.1:8000/api/posts';
  private specialUrl = 'http://127.0.0.1:8000/api/post';
  private addPostUrl = 'http://127.0.0.1:8000/api/post/create';
  constructor(private http: HttpClient) { }

  /** POST: add a new post to the server */
  addPost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(this.addPostUrl, newPost, httpOptions).pipe(
      tap((post: Post) => console.log(`added post w/ id=${post.id}`)),
      catchError(this.handleError<Post>('addPost'))
    );
  }

  /** DELETE: delete the post from the server */
  deletePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.specialUrl}/${id}`;
   return this.http.delete<Post>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted post id=${id}`)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }

   /** UPDATE: update selected post on the server */
   updatePost(post: Post): Observable<any> {
    const url = `${this.postsUrl}/${post.id}`;
    // const url = `${this.postsUrl}`; // Uncomment this to demonstrate error handling
    return this.http.put(url, post, httpOptions).pipe(
      tap(_ => console.log(`updated post id=${post.id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        tap(posts => console.log(`fetched ${posts.length} posts`)),
        catchError(this.handleError<any>(''))
      );
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.specialUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => console.log(`fetched post id=${id}`)),
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }

  /**
  * Handle Http operation that failed.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // Log raw error to console
    console.error(error); // log to console instead

    // Log custom error message to console
    console.log(`${operation} failed: ${error.message}`);

    // Send custom error message to view
    return throwError(`${operation} failed: ${error.message}`);
  };
}

}
