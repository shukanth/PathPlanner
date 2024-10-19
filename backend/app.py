from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Connect to SQLite database
def connect_db():
    return sqlite3.connect('pathplanner.db')

# Create the table for storing courses (if not already created)
def create_tables():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            major TEXT NOT NULL,
            course_code TEXT NOT NULL,
            course_name TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

create_tables()

@app.route('/courses', methods=['POST'])
def add_course():
    data = request.get_json()
    major = data['major']
    course_code = data['course_code']
    course_name = data['course_name']

    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO courses (major, course_code, course_name) VALUES (?, ?, ?)',
                   (major, course_code, course_name))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Course added successfully!'}), 201

@app.route('/courses/<major>', methods=['GET'])
def get_courses(major):
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM courses WHERE major = ?', (major,))
    courses = cursor.fetchall()
    conn.close()

    course_list = [{'id': row[0], 'major': row[1], 'course_code': row[2], 'course_name': row[3]} for row in courses]

    return jsonify(course_list)

if __name__ == '__main__':
    app.run(debug=True)