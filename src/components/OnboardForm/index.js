import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useAuth } from "../common/Auth";
import { db } from "../../../config/firebase";
import Image from "next/image";
import Card from "../common/Card";
import DefaultImage from "../../assets/gallery.png";
import { useRouter } from "next/router";
import Loader from "../common/Loader";

const OnboardForm = () => {
  const { currentUser } = useAuth();
  const router = useRouter();

  const [loader, setLoader] = useState(false);
  const { email, displayName, phoneNumber, uid } = currentUser;
  const [student, setStudent] = useState({
    name: displayName,
    year: "",
    branch: "",
    course: "",
    phoneNumber: phoneNumber || "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectURL = URL.createObjectURL(selectedFile);
    setPreview(objectURL);

    return () => {
      URL.revokeObjectURL(preview);
    };
  }, [selectedFile]);

  console.log("currentUser :>> ", currentUser);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const profile = e.target.files[0];
    if (profile.size > 2097152) {
      alert("File should be less than 2 MB!");
    } else {
      setSelectedFile(profile);
    }
  };

  const uploadProfile = () => {
      const storage = getStorage();
      const storageRef = ref(storage, `/students/${uid}/profile`);

      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, selectedFile).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        router.push("/classroom");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    
    // const collectionRef = collection(db, "students");
    // const docRef = await addDoc(collectionRef, {
      await setDoc(doc(db, "students", uid), {
        ...student,
        email,
        enrollTime: serverTimestamp(),
      });
      uploadProfile();
      setStudent({
        name: "",
        year: "",
        branch: "",
        course: "",
        phoneNumber: "",
      });
    // console.log("success", `Student with id ${docRef.id} is added successfully`);
  };
  return (
    <div className="w-full">
      <h2 className="text-2xl my-3 text-center text-secondary">OnboardForm</h2>
      {loader ? (
        <Loader />
      ) : (
        <div className="Onboard__Form mt-6 flex  flex-col-reverse lg:flex-row gap-5 lg:gap-2 items-center justify-around px-8 lg:px-28">
          <div className="card">
            <Card image={preview} item={student} />
          </div>
          <form className="w-80 lg:px-2 flex justify-between items-around gap-5" action="submit">
            <label
              htmlFor="profileImg"
              className={`flex items-center text-white cursor-pointer w-40 transition-all ease-in-out delay-300 duration-[2000ms] ${
                preview ? "translate-x-28" : ""
              }`}
              onChange={onSelectFile}
            >
              <input
                className="input"
                type="file"
                accept="image/*"
                name="profileImg"
                id="profileImg"
                hidden
                // value={student.profileImg}
              />
              <Image
                className={preview ? "rounded-full" : ""}
                src={preview ? preview : DefaultImage}
                width={100}
                height={100}
                objectFit="cover"
                alt="Input.png"
              />{" "}
              {preview ? "" : "Add Profile"}
            </label>

            <div className="flex justify-between items-center mt-4">
              <label className="text-white pr-4" htmlFor="name">
                Name
              </label>
              <input
                className="input"
                type="text"
                name="name"
                id="name"
                value={student.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="branch" className="text-white pr-4">Branch</label>
              <input
                className="input"
                type="text"
                name="branch"
                id="branch"
                value={student.branch}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-between items-center">
              <label htmlFor="year" className="text-white pr-4">Year</label>
              <input
                className="input"
                type="text"
                name="year"
                id="year"
                value={student.year}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-between items-center">
              <label htmlFor="course" className="text-white pr-4">Course Enrolled</label>
              <input
                className="input"
                type="text"
                name="course"
                id="course"
                value={student.course}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-between items-center">
              <label htmlFor="phoneNumber" className="text-white pr-4">Whatsapp Number</label>
              <input
                className="input"
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                value={student.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <button
              className="my-3 bg-white text-black p-2 rounded-lg hover:bg-slate-500 hover:text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OnboardForm;
