import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements AfterViewInit {
operatingSystems: string[] = [
  'Windows 10',
  'Linux',
  'Mac OS'
]

@ViewChild('myForm') myForm!: NgForm;

ngAfterViewInit(): void {
    this.myForm.form.patchValue({
      ram: '6 GB',
      processor: 'Intel Core i7'
    });
}

onSubmit():void {
  console.log(this.myForm.value)
}
}
