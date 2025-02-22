"use client"

import Introduce from "@/components/home-page/home";
import SocialNavbar from "@/components/home-page/social-navbar";
import Project from "@/components/home-page/project";
import Experience from "@/components/home-page/experience";

export default function Page() {
  return( 
    <>
        <Introduce />
        <Experience />
        {/* <Project /> */}
        <SocialNavbar />
        {/* <Footer /> */}
    </>
 );
}
