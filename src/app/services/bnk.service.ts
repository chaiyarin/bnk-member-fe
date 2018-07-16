import { Injectable } from '@angular/core';
import { Member } from '../models/member';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Feed } from '../models/feed';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient) { }

  list(): Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.api_url}/bnk/members`);
  }

  instagram(id: string): Observable<any> {
    return this.http.get<any>(`${environment.instagram_api_url}${id}`);
  }

  getMember(id: string): Observable<Member> {
    return this.http.get<Member>(`${environment.api_url}/bnk/members/${id}`);
  }

  update(member: Member): Observable<Member> {
    return this.http.patch<Member>(`${environment.api_url}/bnk/members/${member._id}`, member);
  }
}
