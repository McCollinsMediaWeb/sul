import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const HeroBanner = () => {
  const size = useWindowSize();
  return (
    <div>
      <div className="HeaderWrap">
        {size.width}px / {size.height}px
      </div>
    </div>
  );
};
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
export default HeroBanner;
