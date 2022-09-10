import React from 'react'
import style from '../../../../styles/Loader.module.css'
const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen fixed top-0 left-0 bg-black'>
        <div className={`${style["bar-spin"]}`}>
        </div>
    </div>
  )
}

export default Loader