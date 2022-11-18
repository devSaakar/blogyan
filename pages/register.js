import { async } from "@firebase/util";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../config/firebase";

const Contact = () => {
  const [form, setForm] = useState({
    mobile:'',
    name:'',
    message:"",
  })


  const handleChange = (e) =>{
    const {name,value} = e.target;
    console.log('form.mobile :>> ', typeof (form.mobile*1));
    if(name==="mobile"){
      console.log('Entered');
      console.log('!(/^[0-9]{11}$/.test(form.mobile)) :>> ', !(/^[0-9]{11}$/.test(form.mobile)));
      console.log('value :>> ', value);
      if((/^[0-9]{11}$/.test(value))){
        return false;
      }
      if( !Number.isInteger(value*1)){
        console.log('Not A number');
        
        return false;
      }
    }
    setForm({...form,[name]:value})

  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('form :>> ', form);
    await setDoc(doc(db, "enquiry", form.mobile), {
      form:form,
      enrollTime: serverTimestamp(),
    }).then(()=>{
      alert("Success");
      setForm({
        mobile:'',
        name:'',
        message:"",})
    });
  }

  const {name,mobile,message} = form;
  return (
    <div className="bg-gray-800">
      <section className="text-gray-600 body-font relative py-2">
        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-col-reverse lg:flex-row flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Lane no 5, Post Office Rd, Clement Town, Dehradun, Uttarakhand 248002&amp;t=p&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="absolute inset-0 filter: grayscale(1) contrast(1.2) opacity(0.4)"
            ></iframe>
            
            <div className="bg-gray-100 relative flex flex-wrap mt-80 md:mt-0 rounded shadow-md py-4">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Post Office Rd & Ln No. 5 New Basti, Clement Town, Dehradun,
                  Uttarakhand 248002
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  saakarchauhan@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <a href="tel:9149032877"><p>Call Now</p></a>
              </div>
            </div>
          </div>
          <form  onSubmit={handleSubmit}  className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-8 rounded-lg py-4 mb-4">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Admission
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Admission Query
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="mobile"
                className="leading-7 text-sm text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button onSubmit={handleSubmit} type="submit" className="text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Register to be an ideal candidate for recruiters.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
