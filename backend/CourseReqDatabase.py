import sqlite3
import pandas as pd

# Path to the CSV file
csv_path = "CourseReqCSV.csv"

# Load the CSV into a DataFrame
df = pd.read_csv(csv_path)
df.drop(columns=["Unnamed: 0"], inplace=True, errors='ignore')

# Connect to SQLite database
with sqlite3.connect('CourseRec.sqlite') as connection:
    crsr = connection.cursor()

    # Check if the table exists before creating it
    crsr.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='courserec'")
    existing_table = crsr.fetchone()

    if existing_table:
        print("Table 'courserec' already exists.")
    else:
        # Create the table
        crsr.execute(""" 
        CREATE TABLE courserec (
          ID INTEGER,
          SUBJECT TEXT,
          COURSENUMBER INTEGER,
          COURSENAME TEXT,
          NUMCREDIT INTEGER
        );
        """)
        print("Table 'courserec' created successfully.")

    # Insert data into the table
    for index, row in df.iterrows():
        insert_query = """
        INSERT INTO courserec (ID, SUBJECT, COURSENUMBER, COURSENAME, NUMCREDIT)
        VALUES (?, ?, ?, ?, ?)
        """
        crsr.execute(insert_query, (row['ID'], row['Subject'], row['Number'], row['Course Title'], row['Credit Hours']))

    # Commit changes and retrieve data
    connection.commit()
    crsr.execute("SELECT * FROM courserec")

    for i in crsr.fetchall():
        print(i)
