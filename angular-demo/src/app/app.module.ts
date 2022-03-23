import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListEntryComponent } from './user-list/user-list-entry/user-list-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserListComponent,
    UserListEntryComponent,
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
