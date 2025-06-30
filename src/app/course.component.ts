import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './course.service';

@Component({
  selector: 'course',
  imports: [CommonModule],
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
  imgUrl = "http://lorempixel.com/400/200";
  colspan = 2;
}
