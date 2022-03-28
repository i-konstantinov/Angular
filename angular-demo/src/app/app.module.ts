import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListEntryComponent } from './user-list/user-list-entry/user-list-entry.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { TimeComponent } from './time/time.component';


export let myStringInjectionToken = new InjectionToken("myString");

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserListComponent,
    UserListEntryComponent,
    TimeComponent
],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: UserService,
      useClass: UserService
    },
    {
      provide: myStringInjectionToken,
      useValue: "Hello world from injected string!"
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
