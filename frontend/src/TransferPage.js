import React, { useState } from 'react';
import './TransferPage.css'; // Import the CSS file

function TransferPage() {
    const [apgrade, setApgrade] = useState({ course: '', grade: '', credits: '' });
    const [osuClasses, setOsuClasses] = useState({ course: '', grade: '', credits: '' });
    const [addedCourses, setAddedCourses] = useState([]);

    const handleAddApCredit = () => {
        if (apgrade.course && apgrade.grade) {
            setAddedCourses([...addedCourses, { type: 'AP Credit', course: apgrade.course, grade: apgrade.grade, credits: '0' }]);
            setApgrade({ course: '', grade: '', credits: '' });
        }
    };

    const handleAddOsuClass = () => {
        if (osuClasses.course && osuClasses.grade) {
            setAddedCourses([...addedCourses, { type: 'OSU Class', course: osuClasses.course, grade: osuClasses.grade, credits: osuClasses.course }]);
            setOsuClasses({ course: '', grade: '', credits: '' });
        }
    };

    const handleDelete = (index) => {
        const newCourses = addedCourses.filter((_, i) => i !== index);
        setAddedCourses(newCourses);
    };

    return (
        <div className="container">
            <h1>Transfer Credits</h1>

            <div>
                <h2>AP Courses</h2>
                <input
                    type="text"
                    placeholder="AP Course Name"
                    value={apgrade.course}
                    onChange={(e) => setApgrade({ ...apgrade, course: e.target.value })}
                />
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
