import { Component, OnInit } from '@angular/core';

import { Profile } from 'src/app/classes/ClassProfile/profile';
import { ProfileService } from 'src/app/services/ServProfile/profile.service';
import {  Repos } from 'src/app/classes/ClassRepo/repos'
import { environment } from 'src/environments/environment';
import {delay, mapTo} from 'rxjs/operators';
import {fromEvent, merge, Observable, of} from 'rxjs';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profile:Profile[] | undefined;
  userName:string = 'ShaviyaVictor';
  repos!:Repos[];
  userDetails:any;
  repoInfo!:boolean;
  online$: Observable<boolean>;
  isConnected = true;
  status!: string;
  repoDetail!: boolean;
  loading = false;
  errorMessage:any;

  criteriaArray: string[] = ['Users', 'Repositories'];

  constructor(private profileService:ProfileService ) { 

    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );
    this.networkStatus();

  }

  public networkStatus(): void {
    this.online$.subscribe(value => {
      if (value) {
        this.isConnected = true;
        this.status = 'ONLINE';
      } else {
        this.isConnected = false;
        this.status = 'OFFLINE';
      }
    });
  }

  findRepos(repoLocation: string): void {
    this.repoDetail = true;
    this.loading = true;
    this.profileService.getUserProfile(repoLocation).then(res => {
      this.userDetails = res;
      this.loading = false;
    });
  }

  
  ngOnInit(): void {

  }

  performSearch(criteria: string, data: string): void {
    if (criteria === this.criteriaArray[0]) {
      delay(5000);
      this.repoInfo = false;
      this.repoDetail = false;
      this.loading = true;
      this.profileService.searchUser(data).then(users => {
        this.profile = users.items;
        this.loading = false;
      });
    } 
    
    else {
      this.repoInfo = true;
      this.repoDetail = false;
      this.loading = true;
      this.profileService.searchRepos(data).then(repos => {
        this.repos = repos.items;
        this.loading = false;
      });
    }
  }

}
