from flask import Flask, jsonify
import sqlite3
import json
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# Connect to the APCourses database and query data
@app.route('/api/apcourses', methods=['GET'])
def get_ap_courses():
    try:
        with sqlite3.connect('APCourses.sqlite') as connection:
            crsr = connection.cursor()
            crsr.execute("SELECT * FROM apcourses")
            ap_courses = crsr.fetchall()

            # Format the result as a list of dictionaries to return as JSON
            course_list = []
            for course in ap_courses:
                course_dict = {
                    'exam_name': course[0],
                    'min_score': course[1],
                    'num_credit': course[2],
                    'equiv_course': course[3]
                }
                course_list.append(course_dict)

            return jsonify(course_list)
    except sqlite3.OperationalError as e:
        return jsonify({"error": str(e)}), 500

# Connect to the CourseRec database and query data
@app.route('/api/courserec', methods=['GET'])
def get_course_recs():
    try:
        with sqlite3.connect('CourseRec.sqlite') as connection:
            crsr = connection.cursor()
            crsr.execute("SELECT * FROM courserec")
            course_recs = crsr.fetchall()

            # Format the result as a list of dictionaries to return as JSON
            course_list = []
            for course in course_recs:
                # Convert the PRERECS field (text) into an array
                prerecs_array = json.loads(course[5]) if course[5] else []

                course_dict = {
                    'id': course[0],
                    'subject': course[1],
                    'course_number': course[2],
                    'course_name': course[3],
                    'num_credit': course[4],
                    'prerequisites': prerecs_array
                }
                course_list.append(course_dict)

            return jsonify(course_list)
    except sqlite3.OperationalError as e:
        return jsonify({"error": str(e)}), 500
    
dummy_taken_courses = [2, 5, 8, 12]

@app.route('/api/schedule', methods=['POST'])
def generate_schedule():
    try:
        schedule = []
        total_credits = 0

        # Connect to the CourseRec database to get course data
        with sqlite3.connect('CourseRec.sqlite') as connection:
            crsr = connection.cursor()
            crsr.execute("SELECT * FROM courserec")
            course_recs = crsr.fetchall()

            for course in course_recs:
                course_id = course[0]
                # Convert the PRERECS field (text) into an array
                prerecs_array = json.loads(course[5]) if course[5] else []

                # Check if the course can be added to the schedule
                if course_id not in dummy_taken_courses and all(prerec in dummy_taken_courses for prerec in prerecs_array):
                    # Check if adding the course would exceed the credit limit
                    if total_credits + course[4] <= 14 or (total_credits < 12 and total_credits + course[4] <= 18):
                        schedule.append({
                            'id': course_id,
                            'subject': course[1],
                            'course_number': course[2],
                            'course_name': course[3],
                            'num_credit': course[4]
                        })
                        total_credits += course[4]

        return jsonify({'schedule': schedule}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Basic index route
@app.route('/')
def index():
    return "Welcome to the API! Use /api/apcourses or /api/courserec."

if __name__ == '__main__':
    app.run(debug=True)
