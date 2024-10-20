import React, { useEffect, useState } from 'react';

function App() {
    const [apCourses, setApCourses] = useState([]);
    const [courseReqs, setCourseReqs] = useState([]);

    // Fetch AP Courses
    useEffect(() => {
        fetch('http://localhost:5000/api/apcourses')
            .then(response => response.json())
            .then(data => setApCourses(data))
            .catch(error => console.error('Error fetching AP courses:', error));
    }, []);

    // Fetch Course Requirements
    useEffect(() => {
        fetch('http://localhost:5000/api/coursereqs')
            .then(response => response.json())
            .then(data => setCourseReqs(data))
            .catch(error => console.error('Error fetching course requirements:', error));
    }, []);

    return (
        <div>
            <h1>AP Courses</h1>
            <ul>
                {apCourses.map((course, index) => (
                    <li key={index}>
                        {course['Exam Name']} - {course['Minimum Score']} - {course['Number of Credit']} credits
                    </li>
                ))}
            </ul>

            <h1>Course Requirements</h1>
            <ul>
                {courseReqs.map((req, index) => (
                    <li key={index}>
                        {req['Subject']} {req['Course Number']} - {req['Course Name']} - {req['Credit Hours']} credits
                    </li>
                ))}
            </ul>

            {/* Display just the course names */}
            <h1>All Course Names</h1>
            <h2>AP Courses</h2>
            <ul>
                {apCourses.map((course, index) => (
                    <li key={index}>{course['Exam Name']}</li>
                ))}
            </ul>

            <h2>Course Requirements</h2>
            <ul>
                {courseReqs.map((req, index) => (
                    <li key={index}>{req['course_name']}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
