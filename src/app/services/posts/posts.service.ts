import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from './post-contract';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private http = inject(HttpClient);
  API_BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor() { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API_BASE_URL}/posts`)
  }

  getPostsByUserId(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${this.API_BASE_URL}/users/${id}/posts`
    )
  }
}
