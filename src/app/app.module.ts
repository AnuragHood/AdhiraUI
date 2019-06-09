import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatMenuModule,MatSidenavModule } from '@angular/material';
import { LoginCardComponent } from './login/login-card/login-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, MatInputModule} from '@angular/material/';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SignupModalComponent } from './signup-modal/signup-modal.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginCardComponent,
    FooterComponent,
    SignupModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
