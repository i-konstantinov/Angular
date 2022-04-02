import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestModule } from './test/test.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AllowSubmitDirective } from './login/allow-submit.directive';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    AllowSubmitDirective
],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    TestModule
  ],
  providers: [],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { } 
