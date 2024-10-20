import React from 'react';
import TabNav from './TabNav';
import './TransferPage.css';

function SchedulePlan() {
    const semesters = [
        {
            semester: 'Semester 1',
            courses: [
                { code: 'MATH 1151', title: 'Calculus 1' },
                { code: 'ENGR 1100', title: 'Introduction to Ohio State and Engineering' },
                { code: 'ENGR 1181', title: 'Fundamentals of Engineering I' },
                { code: 'General Education Elective', title: '' },
            ],
        },
        {
            semester: 'Semester 2',
            courses: [
                { code: 'MATH 1172', title: 'Engineering Math A' },
                { code: 'PHYSICS 1250', title: 'Calculus-Based Physics I' },
                { code: 'ENGR 1182', title: 'Fundamentals of Engineering II' },
                { code: 'General Education Elective', title: '' },
            ],
        },
        {
            semester: 'Semester 3',
            courses: [
                { code: 'CSE 2321', title: 'Foundations I: Discrete Structures' },
                { code: 'MATH 2568', title: 'Linear Algebra' },
                { code: 'CSE 2221', title: 'Software I: Software Components' },
                { code: 'General Education Elective', title: '' },
            ],
        },
        {
            semester: 'Semester 4',
            courses: [
                { code: 'CSE 2331', title: 'Foundations II: Data Structures and Algorithms' },
                { code: 'CSE 2421', title: 'Systems I: Introduction to Low-Level Programming and Computer Organization' },
                { code: 'CSE 2431', title: 'Systems II: Introduction to Operating Systems' },
                { code: 'STAT 3470', title: 'Introduction to Probability and Statistics for Engineers' },
                { code: 'General Education Elective', title: '' },
            ],
        },
        {
            semester: 'Semester 5',
            courses: [
                { code: 'CSE 3341', title: 'Principles of Programming Languages' },
                { code: 'CSE 3421', title: 'Introduction to Computer Architecture' },
                { code: 'CSE 3461', title: 'Computer Networking and Internet Technologies' },
                { code: 'CSE 3521', title: 'Survey of Artificial Intelligence I: Basic Techniques' },
                { code: 'General Education Elective', title: '' },
            ],
        },
        {
            semester: 'Semester 6',
            courses: [
                { code: 'CSE 3901', title: 'Project: Design, Development, and Documentation of Web Applications' },
                { code: 'CSE 3902', title: 'Project: Design, Development, and Documentation of Interactive Systems' },
                { code: 'CSE 3903', title: 'Project: Design, Development, and Documentation of System Software' },
                { code: 'CSE 5911', title: 'Capstone Design: Software Applications' },
                { code: 'General Education Elective', title: '' },
            ],
        },
    ];

    return (
        <div className='container'>
            <TabNav />
            <div style={{ marginBottom: '100px' }}>
                <h1>Schedule Plan Page</h1>
                <h2>6-Semester Plan</h2>
                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th>Semester</th>
                            <th>Course Code</th>
                            <th>Course Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {semesters.map((semester, index) => (
                            semester.courses.map((course, idx) => (
                                <tr key={`${index}-${idx}`}>
                                    {idx === 0 && <td rowSpan={semester.courses.length}>{semester.semester}</td>}
                                    <td>{course.code}</td>
                                    <td>{course.title}</td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SchedulePlan;
