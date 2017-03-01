import { Injectable } from '@angular/core';

import { Course } from './course.model';
import { COURSES } from './mock-courses';

@Injectable()
export class CourseService {
    getCourses(): Promise<Course[]> {
        return Promise.resolve(COURSES);
    }

    getCoursesSlowly(): Promise<Course[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getCourses()), 2000);
        });
    }
}
