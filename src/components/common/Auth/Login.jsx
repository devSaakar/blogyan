import React from 'react'
import Image from 'next/image'
import { auth, provider } from '../../../../config/firebase';
import { signInWithPopup } from 'firebase/auth';

import GoogleLogo from '../../../assets/google.png';


const Login = () => {
  const loginWithGoogle = () =>{
    signInWithPopup(auth,provider);
  }
  
  return (
    <div className='container mx-auto flex h-screen justify-center items-center bg-slate-800'>
        <button onClick={loginWithGoogle} className='bg-white drop-shadow-2xl flex py-2 px-3 rounded-md gap-x-2 text-black font-semibold'><Image src={GoogleLogo} width={25} height={25} alt='google.png'/>Login with Google</button>
    </div>
  )
}

export default Login