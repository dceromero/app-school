import { Observable } from 'rxjs';
import { FindCommentInterface, RespComment, SaveComment } from './../../interfaces/logros/logro-interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ComentarioService {
  private http = inject(HttpClient)

  getStudytoComment(findComment:FindCommentInterface):Observable<RespComment[]>{
    return this.http.get<RespComment[]>(`${environment.apiUrl}/comment/get-study-to-comment`, {
      params: {...findComment},
    });
  }

  postSaveComment(comment:SaveComment):Observable<RespComment[]>{
    return this.http.post<RespComment[]>(`${environment.apiUrl}/comment/save-comment`,comment);
  }
}
