import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular-demo';
  data = [{test: 1}, {test: 2}, {test: 3}];
}
