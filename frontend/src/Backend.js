import React, { useEffect, useState } from 'react';

function App() {
    const [apCourses, setApCourses] = useState([]);
    const [courseRecs, setCourseRecs] = useState([]);

    // Fetch AP Courses from the Flask backend
    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/apcourses')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setApCourses(data))
            .catch(error => console.error('Error fetching AP courses:', error));
    }, []);

    return (
        <div>
            <h1>AP Courses</h1>
            <ul>
                {apCourses.length > 0 ? (
                    apCourses.map((course, index) => (
                        <li key={index}>
                            {course.exam_name} - Minimum Score: {course.min_score} - {course.num_credit} credits - Equivalent Course: {course.equiv_course}
                        </li>
                    ))
                ) : (
                    <li>No AP Courses found</li>
                )}
            </ul>
        </div>
    );
}

export default App;
