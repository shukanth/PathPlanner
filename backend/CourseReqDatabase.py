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

    # Drop the table if it exists
    crsr.execute("DROP TABLE IF EXISTS courserec")
    
    # Create the table
    crsr.execute(""" 
    CREATE TABLE courserec (
      ID INTEGER,
      SUBJECT TEXT,
      COURSENUMBER INTEGER,
      COURSENAME TEXT,
      NUMCREDIT INTEGER,
      PRERECS TEXT
    );
    """)
    print("Table 'courserec' created successfully.")

    # Insert data into the table
    for index, row in df.iterrows():
        insert_query = """
        INSERT INTO courserec (ID, SUBJECT, COURSENUMBER, COURSENAME, NUMCREDIT, PRERECS)
        VALUES (?, ?, ?, ?, ?, ?)
        """
        crsr.execute(insert_query, (row['ID'], row['Subject'], row['Number'], row['Course Title'], row['Credit Hours'], row['Prerequisites']))

    # Commit changes and retrieve data
    connection.commit()
    crsr.execute("SELECT * FROM courserec")

    # Print the contents of the table
    for i in crsr.fetchall():
        print(i)
