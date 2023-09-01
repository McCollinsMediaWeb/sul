

import React from "react";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
const MapBox = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <div>
        <a href="https://goo.gl/maps/mvDnCnAZPvFiKg7b9" target="_blank">
        {isDesktop && (
           <Image
           src="/map2.jpg"
           layout="responsive"
           width={"1702"}
           height={"673"}
           priority={true}
           className="HdLogo"
         />
        )}
        {!isDesktop && (
           <Image
           src="/map2mobile.jpg"
           layout="responsive"
           width={"468"}
           height={"673"}
           priority={true}
           className="HdLogo"
         />
        )}
       
        </a>
    </div>
  );
};


export default MapBox;


