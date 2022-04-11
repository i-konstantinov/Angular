import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { MainComponent } from './main/main.component';
import { TestRoutingModule } from './test-routing.module';
import { HighlightDirective } from './highlight.directive';
import { MyIfDirective } from './my-if.directive';
import { UserService } from '../user/user.service';



@NgModule({
  declarations: [
    OneComponent,
    TwoComponent,
    MainComponent,
    HighlightDirective,
    MyIfDirective
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  providers: [UserService]
})
export class TestModule { }
