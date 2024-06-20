import React from "react";
import { Link } from 'react-router-dom';
import {Navbar, IconButton, Button, Typography, Collapse} from "@material-tailwind/react";
import {
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbars(){
  
  function NavItem({ children }) {
    return (
      <li>
        <Typography
          as="a"
          variant="paragraph"
          color="blue-gray"
          className="text-blue-gray-700 flex items-center gap-2 font-medium"
        >
          {children}
        </Typography>
      </li>
    );
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);
  
  
  return(
    <div>    
    <Navbar shadow={false} fullWidth className="border-0">
    <div className="flex items-center justify-between ">
      <Link to="/"><img src="/logo.png" className=" lg:w-72" /></Link>
      <form action="#" method="GET" class="hidden lg:block relative  right-14">
            <label for="topbar-search" class="sr-only">Search</label>
            <div class="relative lg:w-80 pr-5">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> </svg>
              </div>
              <input type="text" name="email" id="topbar-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"/>
            </div>
      </form>
      <ul className="ml-10 hidden items-center gap-6 lg:flex">
        
      <Link to="#blog">
          <NavItem >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
              </svg>
              <span className=" hover:text-black">Blog</span>
          </NavItem>
          </Link>
        <Link to="https://attan-muhammad.vercel.app" target="blank">
        <NavItem>
          <UserCircleIcon className="h-5 w-5" />
         <span className=" hover:text-black"> About Me </span>
        </NavItem></Link>
     
      </ul>
      <Link to="/login">
      <div className="hidden items-center gap-4 lg:flex">
        <Button color="gray">Login</Button>
      </div></Link>
      <IconButton
        variant="text"
        color="gray"
        onClick={handleOpen}
        className="ml-auto inline-block lg:hidden"
      >
        {open ? (
          <XMarkIcon strokeWidth={2} className="h-6 w-6" />
        ) : (
          <Bars3Icon strokeWidth={2} className="h-6 w-6" />
        )}
      </IconButton>
    </div>
    <Collapse open={open}>
      <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
        <ul className="flex flex-col gap-4">
          <NavItem><Link to="#blog">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5" >
<path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>            Blog</Link>
          </NavItem>
          
          <NavItem><Link to="https://attan-muhammad.vercel.app">
            <UserCircleIcon className="h-5 w-5" />
            Account</Link>
          </NavItem>
   
        </ul>
        <div className="mt-6 mb-4 flex items-center gap-4">
          <Link to="/login">
          <Button color="gray">Login</Button>
          </Link>
        </div>
      </div>
    </Collapse>
  </Navbar></div>
  )
}