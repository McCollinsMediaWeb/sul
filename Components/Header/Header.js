import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useWindowDimensions from "@/hooks/useWindowDimensions";
const Header = () => {
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.classList.add("your-class-name");
    } else {
      document.body.classList.remove("your-class-name");
    }
  }, [open]);
  return (
    <header>
      <div className="HeaderWrap">
        {/* width: {width} ~ height: {height} */}
        <div className="container-fluid-1">
          <div className="MainHeadr">
            <div className="MainHeadrL">
              <div className="LogoFix">
                <div className="LogoItem">
                  <Image
                    src="/mainlogo2.png"
                    layout="responsive"
                    width={"320"}
                    height={"172"}
                    priority={true}
                    className="HdLogo"
                  />
                </div>
              </div>
            </div>
            <div className="MainHeadrM">
              <div className="HeaderLinks">
                <a href="#">About Us</a>
                <a href="#">Menu</a>
                <a href="#">Gallery</a>
                <a href="#">Reservation</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
            <div className="MainHeadrR">
              <div className="ThumbBox">
                <div className="ThumbBoxL">
                  <a href="#">Order Now</a>
                </div>
                <div className="ThumbBoxR">
                  <div class="QuickActionIcons">
                    <a href="javascript:void(0);">
                      <span class="QLocation">&nbsp;</span>
                    </a>
                    <a href="javascript:void(0);">
                      <span class="QAccount">&nbsp;</span>
                    </a>
                    <a href="javascript:void(0);" onClick={() => setOpen(true)}>
                      <span class="QCart">&nbsp;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <div>
            <div
              className="OverLay1"
              style={{ width: width + "px", height: height + "px" }}
              onClick={() => setOpen(false)}
            >
              &nbsp;
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
