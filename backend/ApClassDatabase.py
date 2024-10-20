import sqlite3
import pandas as pd

# Path to the CSV file
csv_path = "APCourses.csv"

# Load the CSV into a DataFrame
df = pd.read_csv(csv_path)
df.drop(columns=["Unnamed: 0"], inplace=True, errors='ignore')

# Connect to SQLite database
with sqlite3.connect('APCourses.sqlite') as connection:
    crsr = connection.cursor()

    crsr.execute("DELETE FROM apcourses")
    crsr.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='apcourses'")
    existing_table = crsr.fetchone()

    if existing_table:
        print("Table 'apcourses' already exists.")
    else:
        # Create the table
        crsr.execute(""" 
        CREATE TABLE apcourses (
          EXAMNAME TEXT,
          MINSCORE INTEGER,
          NUMCREDIT INTEGER,
          EQUIVCOURSE TEXT
        );
        """)
        print("Table 'apcourses' created successfully.")

    # Insert data into the table
    for index, row in df.iterrows():
        insert_query = """
        INSERT INTO apcourses (EXAMNAME, MINSCORE, NUMCREDIT, EQUIVCOURSE)
        VALUES (?, ?, ?, ?)
        """
        crsr.execute(insert_query, (row['Exam Name'], row['Minimum Score Required'], row['Number of Credit'], row['Equivalent Course']))

    # Commit changes and retrieve data
    connection.commit()
    crsr.execute("SELECT * FROM apcourses")

    for i in crsr.fetchall():
        print(i)
