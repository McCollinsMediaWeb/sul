

import React from "react";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
const MapBox = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <div>
        <a href="#" target="_blank">
        {isDesktop && (
           <Image
           src="/map.jpg"
           layout="responsive"
           width={"1920"}
           height={"771"}
           priority={true}
           className="HdLogo"
         />
        )}
        {!isDesktop && (
           <Image
           src="/mapmobile.jpg"
           layout="responsive"
           width={"666"}
           height={"771"}
           priority={true}
           className="HdLogo"
         />
        )}
       
        </a>
    </div>
  );
};


export default MapBox;


