import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { auth } from "../../../../config/firebase";
import { useAuth } from "../Auth";
import MenuIcon from "./MenuIcon";
import Logo from "../../../assets/logo.svg";
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
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto relative">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image src={Logo} height={40} width={40} alt="blogyan Logo" />
          <span className="px-4 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Blogyan
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon open={open} toogleOpen={() => setOpen(!open)} />
        </button>
        <div
          className={`${
            open ? "absolute right-0 top-10 text-center z-10" : "hidden"
          } w-full md:block md:w-auto transition-all duration-500`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 font-semibold md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {ROUTES.map(({ title, route }) => {
              return (
                <li key={route}>
                  <Link href={route}>
                    <a
                      className={`block py-2 px-6 mx-1 text-white  rounded dark:text-white hover:bg-primary ${
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
