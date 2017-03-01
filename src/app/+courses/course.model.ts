export class Course {
    id: number;
    title: string;
    date: string;
    duration: string;
    description: string;
    cover: string;
    author: {
        name: string;
        avatar: string;
    };
}
