import React, { useState, useEffect } from 'react';
import './TransferPage.css'; // Import the CSS file
import TabNav from './TabNav';

function TransferPage() {
    const [apgrade, setApgrade] = useState({ course: '', grade: '', credits: '' });
    const [osuClasses, setOsuClasses] = useState({ course: '', grade: '', credits: '' });
    const [addedCourses, setAddedCourses] = useState([]);
    const [apCourses, setApCourses] = useState([]);

    // Fetch AP Courses from the Flask backend
    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/apcourses')
            .then(response => response.json())
            .then(data => setApCourses(data))
            .catch(error => console.error('Error fetching AP courses:', error));
    }, []);

    // Get the equivalent course for the selected AP course
    const findEquivCourse = (apCourseName) => {
        const course = apCourses.find(c => c.exam_name === apCourseName);
        return course ? course.equiv_course : 'No Equivalent Found';
    };

    // Add AP Credit to the table
    const handleAddApCredit = () => {
        if (apgrade.course && apgrade.grade) {
            const equivCourse = findEquivCourse(apgrade.course); // Get equivalent course from API data
            setAddedCourses([...addedCourses, { type: 'AP Credit', course: apgrade.course, grade: apgrade.grade, credits: equivCourse }]);
            setApgrade({ course: '', grade: '', credits: '' });
        }
    };

    // Add OSU Class to the table
    const handleAddOsuClass = () => {
        if (osuClasses.course && osuClasses.grade) {
            setAddedCourses([...addedCourses, { type: 'OSU Class', course: osuClasses.course, grade: osuClasses.grade, credits: osuClasses.course }]);
            setOsuClasses({ course: '', grade: '', credits: '' });
        }
    };

    // Delete a course from the table
    const handleDelete = (index) => {
        const newCourses = addedCourses.filter((_, i) => i !== index);
        setAddedCourses(newCourses);
    };

    return (
        <div className="container">
            <h1>Transfer Credits</h1>

            <TabNav />

            <div>
                <h2>AP Courses</h2>
                <select
                    value={apgrade.course}
                    onChange={(e) => setApgrade({ ...apgrade, course: e.target.value })}
                >
                    <option value="">Select AP Course</option>
                    {apCourses.map((course, index) => (
                        <option key={index} value={course.exam_name}>
                            {course.exam_name}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Exam Score"
                    value={apgrade.grade}
                    onChange={(e) => setApgrade({ ...apgrade, grade: e.target.value })}
                />
                <button onClick={handleAddApCredit}>Add AP Credit</button>
            </div>

            <div>
                <h2>OSU Classes</h2>
                <input
                    type="text"
                    placeholder="OSU Class"
                    value={osuClasses.course}
                    onChange={(e) => setOsuClasses({ ...osuClasses, course: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Class Grade"
                    value={osuClasses.grade}
                    onChange={(e) => setOsuClasses({ ...osuClasses, grade: e.target.value })}
                />
                <button onClick={handleAddOsuClass}>Add OSU Class</button>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h2>Added Courses</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Course</th>
                                <th>AP Score/Grade</th>
                                <th>OSU Course Equivalent</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addedCourses.map((course, index) => (
                                <tr key={index}>
                                    <td>{course.type}</td>
                                    <td>{course.course}</td>
                                    <td>{course.grade}</td>
                                    <td>{course.credits}</td>
                                    <td>
                                        <button onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TransferPage;
