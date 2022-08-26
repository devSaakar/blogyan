import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../config/firebase";

const OnboardForm = () => {
  const [student, setStudent] = useState({
    name: "",
    year: "",
    branch: "",
    course: "",
  });

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setStudent({
        ...student,
        [name]:value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const collectionRef = collection(db, "students");
    const docRef = await addDoc(collectionRef, {
      ...student,
      enrollTime: serverTimestamp(),
    });
    setStudent({
        name: "",
        year: "",
        branch: "",
        course: "",
      });
    console.log("success", `Todo with id ${docRef.id} is added successfully`);
  }
  return (
    <div>
      <h2>OnboardForm</h2>

      <form action="submit">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={student.name}
          onChange={handleChange}
        />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          name="year"
          id="year"
          value={student.year}
          onChange={handleChange}
        />
        <label htmlFor="branch">Branch</label>
        <input
          type="text"
          name="branch"
          id="branch"
          value={student.branch}
          onChange={handleChange}
        />
        <label htmlFor="course">Course Enrolled</label>
        <input
          type="text"
          name="course"
          id="course"
          value={student.course}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default OnboardForm;
