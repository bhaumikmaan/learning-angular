import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseComponent } from './course.component';
import { CliComponent } from './cli/cli.component';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , CourseComponent , CliComponent],
  providers: [CourseService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning';
}

