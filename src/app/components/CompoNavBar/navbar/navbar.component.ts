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

  constructor() { }

  ngOnInit(): void {
  }

}
