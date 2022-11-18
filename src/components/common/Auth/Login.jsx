import React from "react";
import Image from "next/image";
import { auth, provider } from "../../../../config/firebase";
import { signInWithPopup } from "firebase/auth";

import GoogleLogo from "../../../assets/google.png";

const Login = () => {
  const loginWithGoogle = () => {
      signInWithPopup(auth, provider);
  };

  return (
    <div className="container mx-auto flex flex-col h-screen justify-center items-center bg-slate-800 gap-16">
      <p className="text-primary text-3xl font-serif font-semibold">Welcome to <span className="text-secondary font-bold"> Bro Code</span></p>
      <button
        onClick={loginWithGoogle}
        className="bg-white drop-shadow-2xl flex py-2 px-3 rounded-md gap-x-2 text-black font-semibold"
      >
        <Image src={GoogleLogo} width={25} height={25} alt="google.png" />
        Login with Google
      </button>
      <p className="text-secondary text-sm font-serif">
        Please <span className="text-primary cursor-pointer"> Login</span> To Continue
      </p>
    </div>
  );
};

export default Login;
