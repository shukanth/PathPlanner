import React from 'react';
import TabNav from './TabNav';

// Sample data for classes
const classes = [
  { ID: 1, Subject: 'CSE', Number: '1222', CourseTitle: 'Introduction to Computer Programming in C++ for Engineers and Scientists', CreditHours: 3 },
  { ID: 2, Subject: 'CSE', Number: '1223', CourseTitle: 'Introduction to Computer Programming in Java', CreditHours: 3 },
  { ID: 3, Subject: 'CSE', Number: '1224', CourseTitle: 'Introduction to Computer Programming in Python', CreditHours: 3 },
  { ID: 4, Subject: 'CSE', Number: '2221', CourseTitle: 'Software I: Software Components', CreditHours: 4 },
  { ID: 5, Subject: 'CSE', Number: '2231', CourseTitle: 'Software II: Software Development and Design', CreditHours: 4 },
  { ID: 6, Subject: 'CSE', Number: '2321', CourseTitle: 'Foundations I: Discrete Structures', CreditHours: 3 },
  { ID: 7, Subject: 'CSE', Number: '2331', CourseTitle: 'Foundations II: Data Structures and Algorithms', CreditHours: 3 },
  { ID: 8, Subject: 'CSE', Number: '2421', CourseTitle: 'Systems I: Introduction to Low-Level Programming and Computer Organization', CreditHours: 4 },
  { ID: 9, Subject: 'CSE', Number: '2431', CourseTitle: 'Systems II: Introduction to Operating Systems', CreditHours: 3 },
  { ID: 10, Subject: 'CSE', Number: '2501', CourseTitle: 'Social, Ethical, and Professional Issues in Computing', CreditHours: 1 },
  { ID: 11, Subject: 'CSE', Number: '3341', CourseTitle: 'Principles of Programming Languages', CreditHours: 3 },
  { ID: 12, Subject: 'CSE', Number: '3421', CourseTitle: 'Introduction to Computer Architecture', CreditHours: 3 },
  { ID: 13, Subject: 'CSE', Number: '3461', CourseTitle: 'Computer Networking and Internet Technologies', CreditHours: 3 },
  { ID: 14, Subject: 'CSE', Number: '3521', CourseTitle: 'Survey of Artificial Intelligence I: Basic Techniques', CreditHours: 3 },
  { ID: 15, Subject: 'CSE', Number: '3541', CourseTitle: 'Computer Game and Animation Techniques', CreditHours: 3 },
  { ID: 16, Subject: 'CSE', Number: '3901', CourseTitle: 'Project: Design, Development, and Documentation of Web Applications', CreditHours: 4 },
  { ID: 17, Subject: 'CSE', Number: '3902', CourseTitle: 'Project: Design, Development, and Documentation of Interactive Systems', CreditHours: 4 },
  { ID: 18, Subject: 'CSE', Number: '3903', CourseTitle: 'Project: Design, Development, and Documentation of System Software', CreditHours: 4 },
  { ID: 19, Subject: 'CSE', Number: '5911', CourseTitle: 'Capstone Design: Software Applications', CreditHours: 4 },
  { ID: 20, Subject: 'CSE', Number: '5912', CourseTitle: 'Capstone Design: Game Design and Development', CreditHours: 4 },
  { ID: 21, Subject: 'CSE', Number: '5913', CourseTitle: 'Capstone Design: Computer Animation', CreditHours: 4 },
  { ID: 22, Subject: 'CSE', Number: '5914', CourseTitle: 'Capstone Design: Knowledge-Based Systems', CreditHours: 4 },
  { ID: 23, Subject: 'CSE', Number: '5915', CourseTitle: 'Capstone Design: Information Systems', CreditHours: 4 },
  { ID: 24, Subject: 'CSE', Number: '5916', CourseTitle: 'Capstone Design: Research-Focused Projects', CreditHours: 4 },
  { ID: 25, Subject: 'MATH', Number: '1151', CourseTitle: 'Calculus 1', CreditHours: 5 },
  { ID: 26, Subject: 'MATH', Number: '1172', CourseTitle: 'Engineering Math A', CreditHours: 5 },
  { ID: 27, Subject: 'MATH', Number: '2568', CourseTitle: 'Linear Algebra', CreditHours: 4 },
  { ID: 28, Subject: 'MATH', Number: '3345', CourseTitle: 'Foundations of Higher Math', CreditHours: 3 },
  { ID: 29, Subject: 'STAT', Number: '3470', CourseTitle: 'Introduction to Probability and Statistics for Engineers', CreditHours: 3 },
  { ID: 30, Subject: 'PHYSICS', Number: '1250', CourseTitle: 'Calculus-Based Physics I', CreditHours: 5 },
  { ID: 31, Subject: 'ECE', Number: '2020', CourseTitle: 'Introduction to Analog Systems and Circuits', CreditHours: 3 },
  { ID: 32, Subject: 'ECE', Number: '2060', CourseTitle: 'Introduction to Digital Logic', CreditHours: 3 },
  { ID: 33, Subject: 'ENGR', Number: '1100', CourseTitle: 'Introduction to Ohio State and Engineering', CreditHours: 1 },
  { ID: 34, Subject: 'ENGR', Number: '1181', CourseTitle: 'Fundamentals of Engineering I', CreditHours: 2 },
  { ID: 35, Subject: 'ENGR', Number: '1182', CourseTitle: 'Fundamentals of Engineering II', CreditHours: 2 },
];

// Main App component
const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>List of Classes</h1>
      <TabNav />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Subject</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Number</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Course Title</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Credit Hours</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classData, index) => (
            <tr
              key={classData.ID}
              style={index < 3 ? { backgroundColor: 'lightgreen' } : {}}
            >
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{classData.ID}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{classData.Subject}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{classData.Number}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{classData.CourseTitle}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{classData.CreditHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
