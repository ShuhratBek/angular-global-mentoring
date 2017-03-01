import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course.model'

@Component({
  selector: 'courses',
  styleUrls: ['./courses.component.scss'],
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
    courses: Course[];

    constructor(
        private courseService: CourseService
    ) {

    }

    ngOnInit() {
        this.courseService.getCourses().then(courses => this.courses = courses);
    }
}
