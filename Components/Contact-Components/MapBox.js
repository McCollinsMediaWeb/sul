

import React from "react";
import Image from "next/image";
const MapBox = () => {
  return (
    <div>
        <a href="#" target="_blank">
        <Image
                      src="/map.jpg"
                      layout="responsive"
                      width={"1920"}
                      height={"771"}
                      priority={true}
                      className="HdLogo"
                    />
        </a>
    </div>
  );
};

export default MapBox;


