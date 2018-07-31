import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService]
})
export class NavbarComponent implements OnInit {

  constructor(private authservice:AuthService, private flashMessage:FlashMessagesService,private router:Router) { }

  ngOnInit() {
  }
  onLogout(){
    this.authservice.logout();
    this.flashMessage.show('You are logged out', {cssClass:'alert-success',
      timeout:3000
    });
    this.router.navigate(['/login']);
    return false;
  }

}
