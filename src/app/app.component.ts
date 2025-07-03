import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CourseComponent} from './course.component';
// import { CliComponent } from './cli/cli.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {SignupFormComponent} from './sign-up/signup-form.component';
import {PostsComponent} from './posts/posts.component';
import {CourseService} from './course.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, CourseComponent, ReactiveFormsModule, FormsModule, SignupFormComponent, FavoriteComponent, PostsComponent, ContactFormComponent],
  providers: [CourseService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning';
}

