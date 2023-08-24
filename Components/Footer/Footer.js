import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useMediaQuery from "@/hooks/useMediaQuery";
const Footer = () => {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <div>
      {!isDesktop && (
       <div class="halo-sticky-toolbar-mobile mobile-only">
        <div class="bottom-bar">
          <ul class="bottom-bar--list">
            <li className={router.pathname == "/" ? "activeLink" : ""}>
              <Link href={"/"}>
                <div class="icon">
                  <div className="FtrIconH home">&nbsp;</div>
                </div>
                <div class="text">Home</div>
              </Link>
            </li>
            <li className={router.pathname == "/reservation" ? "activeLink" : ""}>
              <Link href={"/reservation"}>
                <div class="icon">
                  <div className="FtrIconH reserve">&nbsp;</div>
                </div>
                <div class="text">Reserve</div>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <div class="icon">
                  <div className="FtrIconH order">&nbsp;</div>
                </div>
                <div class="text">Order</div>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <div class="icon">
                  <div className="FtrIconH whatsapp">&nbsp;</div>
                </div>
                <div class="text">WhatsApp</div>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <div class="icon">
                  <div className="FtrIconH call">&nbsp;</div>
                </div>
                <div class="text">Call Us</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      )}
        <footer className="pd-common">
      <div className="FooterWrap">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Image
                src="/footerlogo.png"
                layout="responsive"
                width={"334"}
                height={"224"}
                priority={true}
                className="FtrLogo"
              />
            </div>
            <div className="col-md-5">
              <div className="FtrT1 text-uppercase">USEFUL LINKS</div>
              <div className="FtLinkBox">
                <div className="row">
                  <div className="col-md-6">
                    <Link href={"/about"} className="FtrLink1 hover2">
                      About Us
                    </Link>
                    <Link href={"/menu"} className="FtrLink1 hover2">
                      Menu
                    </Link>
                    <Link href={"/gallery"} className="FtrLink1 hover2">
                      Gallery
                    </Link>
                    <Link href={"/reservation"} className="FtrLink1 hover2">
                      Reservations
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/contact"} className="FtrLink1 hover2">
                      Contact Us
                    </Link>
                    <a href="#" className="FtrLink1 hover2">
                      Order Now
                    </a>
                    <Link href={"/reviews"} className="FtrLink1 hover2">
                      Customer Reviews
                    </Link>
                    <Link href={"/"} className="FtrLink1 hover2">
                      Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="FtrT1 text-uppercase">connect With Us</div>
              <div class="FooterDesc">
                Taking care of the planet is a core SUL Me Principle. Our
                packaging is eco-friendly, our herbs are homegrown, and our
                commitment is lasting.
              </div>
              <div className="SocialBoxWrp">
                <div className="socialItems">
                  <div className="SocialItem">
                    <a href="#" target="_blank">
                      <span className="Icon instagram">&nbsp;</span>
                    </a>
                  </div>
                  <div className="SocialItem">
                    <a href="#" target="_blank">
                      <span className="Icon facebook">&nbsp;</span>
                    </a>
                  </div>
                  <div className="SocialItem">
                    <a href="#" target="_blank">
                      <span className="Icon twitter">&nbsp;</span>
                    </a>
                  </div>
                  <div className="SocialItem">
                    <a href="#" target="_blank">
                      <span className="Icon youtube">&nbsp;</span>
                    </a>
                  </div>
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
    </footer>
    <section className="FooterBottom">
        <div className="container">
            <div className="FoterBtmContent">
                <div className="FoterBtmContentL">© 2023 <span>SulMe</span>&nbsp;&nbsp;All Rights Reserved.</div>
                <div className="FoterBtmContentR">Designed & Developed by <a href="#" target="_blank">McCollins Media</a></div>
            </div>
        </div>
    </section>
    </div>
  );
};
export default Footer;
