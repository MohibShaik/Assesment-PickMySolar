import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { profileInfo } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileinfoService {
  private jsonURL = 'assets/data/profile_data.json';
  constructor(private http: HttpClient) {}

  public getProfileInfo(): Observable<profileInfo> {
    return this.http.get<profileInfo>(this.jsonURL);
  }
}
