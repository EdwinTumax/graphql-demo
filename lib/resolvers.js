'use strict';

const courses = [
    {
        _id: 1,
        title: 'Course test 1',
        teacher: 'Teacher test 1',
        description: 'Description test 1',
        topic: 'Topic test 1'
    },
    {
        _id: 2,
        title: 'Course test 2',
        teacher: 'Teacher test 2',
        description: 'Description test 2',
        topic: 'Topic test 2'
    }
]

module.exports = {
    Query: {
        getCourses: () => {
            return courses;
        },
        getCourse: (root, args) => {
            const course = courses.filter(course => course._id == args.id);
            return course.pop();
        }
    }
}