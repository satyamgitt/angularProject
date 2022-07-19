import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PipePipe } from './Filter/pipe.pipe';
import { FormsModule } from '@angular/forms';
import { SeeMorePageComponent } from './components/see-more-page/see-more-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginPageComponent,
    PipePipe,
    SeeMorePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
