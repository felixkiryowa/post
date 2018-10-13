import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = 'http://127.0.0.1:8000/api/posts';
  private specialUrl = 'http://127.0.0.1:8000/api/post';
 
  constructor(private http: HttpClient) { }
 
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
