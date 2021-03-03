import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bookmark} from '../models/bookmark.model';

const baseUrl = 'http://localhost:8080/api/bookmarks';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(baseUrl);
  }

  get(id: any): Observable<Bookmark> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(`${baseUrl}?title=${title}`);
  }
}
