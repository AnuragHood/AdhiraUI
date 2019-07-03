import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatMenuModule,MatSidenavModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, MatInputModule} from '@angular/material/';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { SlidePanelComponent } from './slide-panel';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule  } from '@angular/material/';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogControlComponent } from './dialog-control/dialog-control.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CookieService } from 'ngx-cookie-service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    SlidePanelComponent,
    DialogControlComponent,

    OtpVerificationComponent,

    ForgotPasswordComponent,

   
    
   
  ],

  entryComponents: [DialogControlComponent, ForgotPasswordComponent,OtpVerificationComponent],

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
    HttpClientModule,
    MatRadioModule,
    FormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
