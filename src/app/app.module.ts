import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatMenuModule,MatSidenavModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, MatInputModule} from '@angular/material/';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { SlidePanelComponent } from './slide-panel';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    SlidePanelComponent,
    
   
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
    HttpClientModule,
    
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
