const courses = [{
    prefix: 'ITIS',
    id: 4166,
    title: 'Network based app development'
},
{
    prefix: 'ITIS',
    id: 4180,
    title: 'Mobile application development'
},
{
    prefix: 'ITCS',
    id: 4156,
    title: 'Intro to machine learning'
},
{
    prefix: 'ITCS',
    id: 3160,
    title: 'Database desgin'
}
];

// Returns a course that matches the id
function findById(id) {
    return courses.find(course => course.id === id);
}

// Adds course to array of courses
function save(course) {
    // Use push() to add course (course) to the array (courses)
    courses.push(course);
}

// Returns a course that matches the prefix
function findByPrefix(prefix) {
    // Use filter() to seach for courses with matching prefix (same format as findById(), using different method to search
    return courses.filter(course => course.prefix === prefix);
}

// Updates the course that matches the id
function updateById(id, course) {
    // Use findIndex() to seach for courses with matching prefix (same format as findById(), using different method to search for index of course rather than the course itself
    let indexOfCourse = courses.findIndex(course => course.id === id);

    // Loop checks if indexOfCourse is in the courses array
    if (indexOfCourse != -1) { // If index is not in the array, findIndex reurns -1
        // Updates course at indexOfCourse from courses array
        courses[indexOfCourse] = course;
        return true;
    } else {
        return false;
    }  
}

// Removes the course that matches the id
function removeById(id) { 
    // splice() removes course object at given index, use findIndex() to tell splice() what to remove

    // Similar format as updateById() function, remove instead of update
    // Use findIndex() to seach for courses with matching prefix (same format as findById(), using different method to search for index of course rather than the course itself
    let indexOfCourse = courses.findIndex(course => course.id === id);

    // Loop checks if indexOfCourse is in the courses array
    if (indexOfCourse != -1) { // If index is not in the array, findIndex reurns -1
        // Removes 1 course at indexOfCourse from courses array
        courses.splice(indexOfCourse, 1); 
        return true;
    } else {
        return false;
    }   
}

// Tests, run using: 'node courses'
save({ prefix: 'ITIS', id: 3310, title: 'Software architecture & design' });
save({ prefix: 'ITIS', id: 4250, title: 'Computer forensics' });
save({ prefix: 'ITIS', id: 4420, title: 'Usable security and privacy' });
console.log(courses);
console.log(findById(4166));
console.log(findByPrefix('ITIS'));
console.log(removeById(4000));
console.log(updateById(4000));
console.log(updateById(4166, {
    prefix: 'ITIS',
    id: 4166,
    title: 'Network-based app development'
}, ));
console.log(removeById(4420));
console.log(courses);

// Notes: Referenced linked tutorials/documentation from Canvas modules to learn about syntax for methods (findIndex(), splice(), filter(), push()) and looping using index (!= -1)