import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
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
                    <Link href={"/"} className="FtrLink1 hover2">
                      About Us
                    </Link>
                    <Link href={"/"} className="FtrLink1 hover2">
                      Menu
                    </Link>
                    <Link href={"/"} className="FtrLink1 hover2">
                      Offers
                    </Link>
                    <Link href={"/"} className="FtrLink1 hover2">
                      Who we are
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <Link href={"/"} className="FtrLink1 hover2">
                      Privacy Policy
                    </Link>
                    <Link href={"/"} className="FtrLink1 hover2">
                      Customers Reviews
                    </Link>
                    <Link href={"/"} className="FtrLink1 hover2">
                      Contact Us
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
