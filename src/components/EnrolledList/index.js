import React from "react";
import Card from "../common/Card";

const EnrolledList = ({students}) => {

  return (
    <div>
      <div>
        <h3 className="text-xl text-center font-semibold text-sky-400 uppercase border-b-2 border-amber-300">Enrolled Students</h3>
        <ol className="px-8 my-8 justify-center grid lg:grid-cols-4 gap-12">
          {students?.length &&
            students?.map((student) => {
              return <Card key={student.id} item={student} />
            })}
        </ol>
      </div>
    </div>
  );
};

export default EnrolledList;
