import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useWindowDimensions from "@/hooks/useWindowDimensions";

import useMediaQuery from "@/hooks/useMediaQuery";

import { useRouter } from "next/router";
const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const router = useRouter();
  const animation = {
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      slideStart: {
        clipPath: "circle(11.6% at 100% 100%)",
      },
      slideEnd: {
        clipPath: "circle(141.4% at 100% 100%)",
      },
    },
    initial: ["hidden", "slideStart"],
    whileInView: ["visible", "slideEnd"],
    transition: { type: "tween", duration: 0.5 },
  };
  const { height, width } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.classList.add("PanelActivated");
    } else {
      document.body.classList.remove("PanelActivated");
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
                  <Link href={"/"} className="">
                    {isDesktop && (
                      <Image
                        src="/mainlogo2.png"
                        layout="responsive"
                        width={"320"}
                        height={"172"}
                        priority={true}
                        className="HdLogo"
                      />
                    )}
                    {!isDesktop && (
                      <Image
                        src="/mobilelogo.png"
                        layout="responsive"
                        width={"174"}
                        height={"117"}
                        priority={true}
                        className="HdLogo"
                      />
                    )}
                  </Link>
                </div>
              </div>
            </div>
            <div className="MainHeadrM">
              <div className="HeaderLinks">
                <Link
                  href={"/about"}
                  className={router.pathname == "/about" ? "active" : ""}
                >
                  About Us
                </Link>
                <a
                  href="/sulme-menu-card.pdf"
                  target="_blank"
                  className={router.pathname == "/menu" ? "active" : ""}
                >
                  Menu
                </a>
                {/* <Link
                  href={"/gallery"}
                  className={router.pathname == "/gallery" ? "active" : ""}
                >
                  Gallery
                </Link> */}
                <Link
                  href={"/reviews"}
                  className={router.pathname == "/reviews" ? "active" : ""}
                >
                  Reviews
                </Link>
                <Link
                  href={"/reservation"}
                  className={router.pathname == "/reservation" ? "active" : ""}
                >
                  Reservations
                </Link>
                <Link
                  href={"/contact"}
                  className={router.pathname == "/contact" ? "active" : ""}
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="MainHeadrR">
              <div className="ThumbBox">
                <div className="ThumbBoxL">
                  <a
                    href="https://www.talabat.com/uae/sul-me-restaurant-llc"
                    target="_blank"
                  >
                    Order Now
                  </a>
                </div>
                <div className="ThumbBoxR">
                  <div class="QuickActionIcons">
                    <a
                      href="https://goo.gl/maps/kYd19Pmdzu68CztL8"
                      target="_blank"
                    >
                      <span class="QLocation">&nbsp;</span>
                    </a>
                    <a
                      href="https://wa.me/+971565518844?text=Hi%20there%20%2C%0AI%20would%20like%20to%20know%20more%20about%20sul%20products%20and%20services"
                      target="_blank"
                    >
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
            <div className="SideNav" style={{ height: height + "px" }}>
              <div>
                <div className="ScrollPart">
                  <div className="SideNavHeader">
                    Sul Menu{" "}
                    <span className="CloseBtn" onClick={() => setOpen(false)}>
                      &nbsp;
                    </span>
                  </div>
                  <div className="SideNavMiddle">
                    <div className="SideNavLinks">
                      <div onClick={() => setOpen(false)}>
                        <Link
                          href={"/"}
                          className={
                            router.pathname == "/" ? "hover1 active" : "hover1"
                          }
                        >
                          Home
                        </Link>
                      </div>
                      <div onClick={() => setOpen(false)}>
                        <Link
                          href={"/about"}
                          className={
                            router.pathname == "/about"
                              ? "hover1 active"
                              : "hover1"
                          }
                        >
                          About Us
                        </Link>
                      </div>
                      <div>
                        {" "}
                        <a href="/sulme-menu-card.pdf" target="_blank"  className={router.pathname == "/menu" ? "hover1 active" : "hover1"}>
                          Menu
                        </a>
                      </div>
                      {/* <div onClick={() => setOpen(false)}>
                        {" "}
                        <Link
                          href={"/gallery"}
                          className={
                            router.pathname == "/gallery"
                              ? "hover1 active"
                              : "hover1"
                          }
                        >
                          Gallery
                        </Link>
                      </div> */}
                      <div onClick={() => setOpen(false)}>
                        <Link
                          href={"/reservation"}
                          className={
                            router.pathname == "/reservation"
                              ? "hover1 active"
                              : "hover1"
                          }
                        >
                          Reservations
                        </Link>
                      </div>
                      <div onClick={() => setOpen(false)}>
                        <Link
                          href={"/contact"}
                          className={
                            router.pathname == "/contact"
                              ? "hover1 active"
                              : "hover1"
                          }
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="SideNavFooter">
                    <div className="T3">Connect With us</div>
                    {isDesktop && (
                      <div>
                        <div className="row HdrRow1">
                          <div className="col-md-4">
                            <Image
                              src="/i1.jpg"
                              layout="responsive"
                              width={"400"}
                              height={"449"}
                              className=""
                            />
                          </div>
                          <div className="col-md-4">
                            <Image
                              src="/i2.jpg"
                              layout="responsive"
                              width={"400"}
                              height={"449"}
                              className=""
                            />
                          </div>
                          <div className="col-md-4">
                            <Image
                              src="/i3.jpg"
                              layout="responsive"
                              width={"400"}
                              height={"449"}
                              className=""
                            />
                          </div>
                        </div>
                        <div className="T4">
                          Follow us for mouthwatering food photos, special
                          offers, and a taste of our vibrant dining experience
                        </div>
                      </div>
                    )}
                    <div className="SocialBoxWrp">
                      <div className="socialItems">
                        <div className="SocialItem">
                          <a
                            href="https://www.instagram.com/sulmeae/"
                            target="_blank"
                          >
                            <span className="Icon instagram">&nbsp;</span>
                          </a>
                        </div>
                        <div className="SocialItem">
                          <a
                            href="https://www.facebook.com/Sulme.uae/"
                            target="_blank"
                          >
                            <span className="Icon facebook">&nbsp;</span>
                          </a>
                        </div>
                        {/* <div className="SocialItem">
                          <a href="#" target="_blank">
                            <span className="Icon twitter">&nbsp;</span>
                          </a>
                        </div>
                        <div className="SocialItem">
                          <a href="#" target="_blank">
                            <span className="Icon youtube">&nbsp;</span>
                          </a>
                        </div> */}
                        <div className="SocialItem">
                          <a href="#" target="_blank">
                            <span className="Icon whatsapp">&nbsp;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
