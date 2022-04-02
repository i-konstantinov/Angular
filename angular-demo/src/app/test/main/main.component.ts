import { Component, OnInit } from '@angular/core';

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

}
