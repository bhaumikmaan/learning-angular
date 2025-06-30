import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from './course.service';
import { SummaryPipe } from './summary.pipe';

@Component({
  selector: 'course',
  imports: [CommonModule , FormsModule , SummaryPipe],
  template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    <ul>
    <img [src] = "imgUrl"/>

    <table>
      <tr>
        <td [attr.colspan] = "colspan">Cell 1</td>
        <td [attr.colspan] = "colspan">Cell 2</td>
        <td [attr.colspan] = "colspan">Cell 3</td>
      </tr>
    </table>
    <button class="btn btn-primary" [class.active]="isActive"> Button </button>

    <p [style.color]="textColor">This text is styled using style binding</p>

    <div (click)="divOnClick($event)">
      <button (click)="onClick($event)"> Click Me </button>
    </div>
    <input #ipValue (keyup.enter)="onKeyUp(ipValue.value)" />
    <p> Press Enter. Your input: {{ipValue.value}} </p>

    <input [(ngModel)]="counter" type="number">
    <button class="btn btn-primary" (click)="incCount()"> Button </button>

    {{ summaryText |  summary:10}}
  `
})
export class CourseComponent{
  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }
  getTitle() {
    return this.title;
  }
  title = "List of Courses";
  courses ;
  // property binding
  imgUrl = "http://lorempixel.com/400/200";
  // attribute binding
  colspan = 2;
  // class binding
  isActive = true // flip and inspect to see how it is removed
  // style binding
  textColor = 'pink'
  // event binding
  divOnClick($event: MouseEvent){
    console.log("Event was bubbled");
  }
  onClick($event: MouseEvent){
    // Toggle to stop event bubbling
    // $event.stopPropagation();
    console.log("Button was clicked: " , $event);
  }

  // template variables
  onKeyUp(ipValue : string){
    console.log("Template Variable: " , ipValue);
  }

  counter = 10;
  incCount(){
    this.counter += 1 ;
    console.log("Incrementing Count to: " , this.counter);
  }

  summaryText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;
}
