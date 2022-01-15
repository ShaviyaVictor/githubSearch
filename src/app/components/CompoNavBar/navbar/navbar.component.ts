import { Component, OnInit } from '@angular/core';

import { Profile } from 'src/app/classes/ClassProfile/profile';
import { ProfileService } from 'src/app/services/ServProfile/profile.service';
import { environment } from 'src/environments/environment';
import {  Observable  } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profile:Profile[] | undefined;
  userName:string = 'ShaviyaVictor';

  loading = false;
  errorMessage:any;

  constructor(private profileService:ProfileService ) { }

  public getProfile(event:any) {

    this.loading = true;

    let promise = new Promise<void>((resolve, reject) => {

      this.profileService.getProfile(this.userName).toPromise().then(Response => {

        this.profile = Response;

        this.loading = false;

        resolve();

      },
      
        error => {

          this.errorMessage = 'Sorry. The user/repository does not exist!';

          this.loading = false;

        }

      );

    });

    return promise;

  }

  ngOnInit(): void {
  }

}
