import { Injectable } from '@angular/core';
import {  HttpClient, HttpClientModule  } from '@angular/common/http';


import {  Observable  } from 'rxjs';
import { Profile } from 'src/app/classes/ClassProfile/profile';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  profile:Profile[] | undefined;
  userName:string = 'ShaviyaVictor';
  

  constructor(  private http:HttpClient ) { 


   }

   getProfile(username:string): Observable<Profile[]> {

    return this.http.get<Profile[]>(  environment.profUrl + '/profile/' + this.userName  );

   }
   
}
