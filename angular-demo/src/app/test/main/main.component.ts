import { Component } from '@angular/core';
import { AsyncSubject, Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  isActive = false;
  
  toggleActive() {
    this.isActive = !this.isActive;
  }
  trackStateSubject() {
    let subject = new AsyncSubject();
    subject.subscribe({
      next: (num) => {
        console.log(`observer A: ${num}`);
      }
    });
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.subscribe({
      next: (num) => console.log(`observer B: ${num}`)
    });
    subject.next(4);
    subject.complete();
  }
}