import { Injectable } from '@angular/core';
import {  HttpClient, HttpClientModule, HttpHeaders  } from '@angular/common/http';


import { Profile } from 'src/app/classes/ClassProfile/profile';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class ProfileService {


  myProfile!: any[];
  myRepositories!: any[];
  userRepo!: any[];
  private userName!: string;


  constructor(private http: HttpClient) {

    console.log('My service injector is working')
    this.userName = 'ShaviyaVictor';

  }

  getProfile(): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `https://api.github.com/users/' + this.userName + '?access_token = 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`;
      this.http
        .get<any>(apiUrl)
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(error => reject(error));
    });
  }

  getRepos(): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `https://api.github.com/users/ShaviyaVictor/repos' + ?access_token = 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`;
      this.http
        .get<any>(apiUrl)
        .toPromise()
        .then(res => {
          //
          resolve(res);
        })
        .catch(error => reject(error));
    });
  }

  searchUser(data: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `https://api.github.com/search/users?q = ${data} &per_page = 1000`;
      this.http
        .get<any>(apiUrl)
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(error => reject(error));
    });
  }

  searchRepos(query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `https://api.github.com/search/repositories?q = ${query}&per_page = 1000`;
      this.http
        .get<any>(apiUrl)
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(error => reject(error));
    });
  }

  getUserProfile(repoURL: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `${repoURL}?&per_page=1000`;
      this.http
        .get<any>(apiUrl)
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(error => reject(error));
    });
  }
}