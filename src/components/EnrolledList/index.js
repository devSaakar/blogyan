import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import Card from "../common/Card";

const EnrolledList = () => {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, "students");
    const q = query(collectionRef);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const students =querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          type: doc.data().type,
        }))
        setStudents(students);
    });
    return unsubscribe;
  }, []);

  console.info(students);

  return (
    <div>
      <div>
        <h3 className="text-xl text-center font-semibold text-secondary uppercase">Enrolled Students</h3>
        <ol className="px-8 py-8 justify-center grid lg:grid-cols-4 gap-12">
          {students?.length &&
            students?.map((student) => {
              console.log("Student",student)
              return <Card key={student.id} item={student} />
            })}
        </ol>
      </div>
    </div>
  );
};

export default EnrolledList;
