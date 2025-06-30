import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './course.component';
import { CliComponent } from './cli/cli.component';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , CourseComponent , CliComponent , FormsModule],
  providers: [CourseService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning';
}

