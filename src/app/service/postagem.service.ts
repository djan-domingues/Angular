import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://djanblogs.herokuapp.com/postagem', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://djanblogs.herokuapp.com/postagem/${id}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://djanblogs.herokuapp.com/postagem', postagem, this.token)
  }
  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://djanblogs.herokuapp.com/postagem', postagem, this.token)
  }

  deletePostagem(id: number){
    this.http.delete(`https://djanblogs.herokuapp.com/postagem/${id}`, this.token)
  }

}