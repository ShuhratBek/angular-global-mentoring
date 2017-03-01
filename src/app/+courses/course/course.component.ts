import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'course',
  styleUrls: ['./course.component.scss'],
  templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit {
    @Input() course: Course;


    public ngOnInit() {

    }

}
