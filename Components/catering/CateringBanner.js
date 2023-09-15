import { useState, React, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Video from "yet-another-react-lightbox/plugins/video";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useRouter } from "next/router";

const CateringBanner = (props) => {
  const videoRef = useRef(null);
  const { height, width } = useWindowDimensions();
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
    transition: { type: "tween", duration: 1.5 },
  };
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [open, setOpen] = useState(false);
  const [booknowUrl, setBooknowUrl] = useState(
    "/reservation"
  );
  const [bookNowName, setbookNowName] = useState("Reserve Now");
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/reservation") {
      setBooknowUrl(
        "/about"
      );
      setbookNowName("About Us");
      return;
    }
  }, [router.pathname]);
  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play();
      }
    };

    // Attach the interaction event listener to the video element
    if (videoRef.current) {
      videoRef.current.addEventListener("click", handleInteraction);
    }

    return () => {
      // Clean up the event listener when the component unmounts
      if (videoRef.current) {
        videoRef.current.removeEventListener("click", handleInteraction);
      }
    };
  }, []);
  return (
    <div className="HeroBannerWrp ImageBanner1">
      {isDesktop && (
         <Image
         src="/catering.jpg"
         layout="responsive"
         width={"1440"}
         height={"900"}
         priority={true}
         className="MainBanner"
       />
      )}
      {!isDesktop && (
       
        <Image
          src="/cateringmobile.jpg"
          layout="responsive"
          width={"645"}
          height={"806"}
          priority={true}
          className="MainBanner"
        />
      )}
      
     
      <div className="Layer2">&nbsp;</div>
      <div className="Layer1">
        <div className="fullWidth">
          <div className="container text-center">
            <div
              className="SliderWrt1"
              {...animation}
              viewport={{ once: true }}
            >
              <div className="BannerContent">
                <div className="T1">{props.title} </div>
                <div className="T2">
                {props.subtitle}
                </div>
                <div>
                  <div className="BannerBtnWrp">
                    <div className="BannerBtns">
                      <a
                       onClick={() => setOpen(true)}
                        href="javascript:void(0);" className="BannerBtn1"
                      >
                        View Gallery
                      </a>
                      
                      <Link href="#ourservices" className="BannerBtn2" 	scroll={false}>
                        View Services
                      </Link>
                      <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        plugins={[Thumbnails]}
                        slides={[
                          { src: "/catering.jpg" },
                          { src: "/catering.jpg" },
                          {
                            src: "/catering.jpg",
                          },
                          { src: "/catering.jpg" },
                          { src: "/catering.jpg" },
                          { src: "/catering.jpg" },
                          { src: "/catering.jpg" },
                          { src: "/catering.jpg" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CateringBanner;
