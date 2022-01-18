import { Injectable } from '@angular/core';
import {  HttpClient, HttpClientModule, HttpHeaders  } from '@angular/common/http';
import 'rxjs/add/operator/map';


import {  Observable  } from 'rxjs';
import { Profile } from 'src/app/classes/ClassProfile/profile';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  profile:Profile[] | undefined;
  private userName:string;
  private clientId = '2b6a1427f546a62194a1';
  private clientSecret = 'ab2ee006ff37ad17b7434695d405ce3f9ad52a58';
  

  constructor(  private http:HttpClient ) { 

    console.log('Service is now running')
    this.userName = 'ShaviyaVictor';

   }

   getProfile(username:string): Observable<Profile[]> {

    return this.http.get<Profile[]>(  environment.profUrl + '/profile/' + this.userName  );

   }
   
}
