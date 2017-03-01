import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { routes } from './courses.routes';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course';
import { CourseService } from './course.service';

console.log('`Courses` bundle loaded asynchronously');

@NgModule({
    declarations: [
        CoursesComponent,
        CourseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    providers: [CourseService]
})
export class CoursesModule {
  public static routes = routes;
}
