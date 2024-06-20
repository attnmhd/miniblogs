import React from "react";

import {

  Button,
  Typography,
  Input,
} from "@material-tailwind/react";


import Navbars from "./Navbar";
function HeroSection16() {
  

  return (
    <div className=" -mx-10 -mt-20" >
      <Navbars />
      <header className="bg-white px-8 ">
        <div className="grid mt-0 min-h-[82vh] w-full  md:h-[34rem] place-items-stretch">
          <div className="container mx-auto px-4 text-center">
        
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Embrace the{" "}
              <span className="text-green-500 leading-snug ">
              future
              </span>{" "}
              and explore the boundless possibilities that{" "}
              <span className="leading-snug text-green-500">
              technology
              </span>
              {" "} has to offer.
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              "Welcome to our tech community! Join our email list to receive tech news and tips directly in your inbox."
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className=" flex w-full flex-col gap-4 md:flex-row">
                <Input color="gray" label="Enter your email" size="lg" />
                <Button
                  color="gray"
                  className="w-full px-4 md:w-[12rem]"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    
  );
}

export default HeroSection16;