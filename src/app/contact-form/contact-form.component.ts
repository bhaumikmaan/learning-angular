import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModel , NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  log(x:NgModel){
    console.log(x) ;
  }
  submit(f:NgForm){
    console.log(f) ;
  }
}
