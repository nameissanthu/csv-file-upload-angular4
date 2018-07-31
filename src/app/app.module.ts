import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { UploadComponent } from './home/upload/upload.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FlashMessagesModule} from 'angular2-flash-messages'; 
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Authguard } from './services/authguard.service';
import { AuthService } from './services/auth.service';
import { SearchFilterPipe} from './search-filter/search-filter.pipe';




const routes =([
  {path:'login', component:LoginComponent},
  {path:'upload', component:UploadComponent, canActivate:[Authguard]}
])
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UploadComponent,
    LoginComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule.forRoot(),
  ],
  providers: [Authguard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
