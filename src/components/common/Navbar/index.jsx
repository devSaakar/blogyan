import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { auth } from "../../../../config/firebase";
import { useAuth } from "../Auth";
import MenuIcon from "./MenuIcon";
import Logo from "../../../assets/logo_img.svg";
import LogoText from "../../../assets/logo_text.svg";
import ROUTES from "../../../../config/routes";

const Navbar = () => {
  const { currentUser } = useAuth();
  const router = useRouter();
  const { pathname } = router;
  const [open, setOpen] = useState(false);
  const { photoURL } = currentUser;

  console.log("pathname :>> ", router);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto relative">
        <Link href="/">
          <a className="flex items-center">
          <div className="relative w-20 lg:w-32 h-16 ">
            <Image className="rounded-md border-black" src={Logo} layout="fill" objectFit="cover" alt="logo.png" />
          </div>
          <div className="relative w-28 lg:w-48 h-16 ">
            <Image className="rounded-md border-black" src={LogoText} layout="fill" objectFit="cover" alt="logo.png" />
          </div>
            {/* <span className="px-4 self-center text-xl font-semibold whitespace-nowrap text-white">
              {`<BRO-CODE />`}
            </span> */}
          </a>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg lg:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon open={open} toogleOpen={() => setOpen(!open)} />
        </button>
        <div
          className={`${
            open ? "absolute right-0 top-10 text-center z-10" : "hidden"
          } w-full lg:block lg:w-auto transition-all ease-in-out duration-700`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg border  font-semibold lg:flex-row lg:mt-0 lg:text-sm lg:font-medium lg:border-0 bg-gray-900 border-gray-700">
            {ROUTES.map(({ title, route }) => {
              return (
                <li key={route}>
                  <Link href={route}>
                    <a
                      className={`block py-2 px-6 mx-1 text-white  rounded hover:bg-primary ${
                        pathname === route ? "bg-secondary" : ""
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              );
            })}
            {/* <li>
              <div className="user__info flex justify-center cursor-pointer">
                <Image
                  className="rounded-full"
                  src={photoURL}
                  width={40}
                  height={40}
                  alt="user.png"
                />
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// <nav className="bg-black py-4">
//   <div className="user__info flex justify-end cursor-pointer" title='Logout' onClick={()=>auth.signOut()}>
//   <Image className="rounded-full" src={photoURL} width={40} height={40} alt='user.png' />
//   </div>
// </nav>
