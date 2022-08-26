import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../config/firebase";

const EnrolledList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "students");
    const q = query(collectionRef, orderBy("enrollTime", "asc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setStudents(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().enrollTime?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <div>
        <h3>Enrolled Students</h3>
        <ol>
          {students?.length &&
            students.map((student) => {
              return <li key={student.enrollTime}>{student.name}</li>
            })}
        </ol>
      </div>
    </div>
  );
};

export default EnrolledList;
