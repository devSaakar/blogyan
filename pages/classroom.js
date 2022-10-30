import React from 'react'

import EnrolledList from '../src/components/EnrolledList'

const Classroom = () => {
  // console.log('students :>> ', props.students);
  return (
    <div className='Classroom__Container'>
        <p className="text-4xl text-primary text-center py-4">
            Classroom
        </p>
        <EnrolledList />
    </div>
  )
}

export default Classroom

// export async function getServerSideProps() {
//   const students = [];
//   const querySnapshot = await getDocs(collection(db, "students"));
//   querySnapshot.forEach((doc) => {
//     students.push(JSON.parse(JSON.stringify({id: doc.id, ...doc.data()})));
//   });
//   return {
//     props: {students},
//   }
// }