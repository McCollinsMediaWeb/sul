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

const HeroBanner = (props) => {
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
    <div className="HeroBannerWrp">
      {isDesktop && (
        <video
        ref={videoRef}
        src="/mainbanner.mp4"
        width="100%"
        height="700"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero1.jpg"
        className="MainBannerVideo"
      />
      )}
      {!isDesktop && (
        <video
        ref={videoRef}
        src="/mainbanner1.mp4"
        width="100%"
        height="700"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero1mobile.jpg"
        className="MainBannerVideo"
      />
        // <Image
        //   src="/hero1mobile.jpg"
        //   layout="responsive"
        //   width={"612"}
        //   height={"900"}
        //   priority={true}
        //   className="MainBanner"
        // />
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
                        href="https://www.talabat.com/uae/sul-me-restaurant-llc" target="_blank"
                        className="BannerBtn1"
                      >
                        Order Now
                      </a>
                      
                      <Link href={booknowUrl} className="BannerBtn2">
                        {bookNowName}
                      </Link>
                      <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        plugins={[Video, Fullscreen, Thumbnails]}
                        slides={[
                          {
                            type: "video",
                            width: 1920,
                            height: 1920,
                            poster: "/hero1.jpg",
                            autoPlay: true,
                            loop: true,
                            sources: [
                              {
                                src: "https://res.cloudinary.com/dhhtgppki/video/upload/v1670394503/DIH-assets/DIH_Video_desktop-mp4_z5p3aa.mp4",
                                type: "video/mp4",
                              },
                            ],
                          },
                          {
                            type: "video",
                            width: 1920,
                            height: 1920,
                            poster: "/hero1.jpg",
                            autoPlay: true,
                            loop: false,
                            sources: [
                              {
                                src: "https://res.cloudinary.com/dhhtgppki/video/upload/v1670394503/DIH-assets/DIH_Video_desktop-mp4_z5p3aa.mp4",
                                type: "video/mp4",
                              },
                            ],
                          },
                          {
                            type: "video",
                            width: 1920,
                            height: 1920,
                            poster: "/hero1.jpg",
                            autoPlay: true,
                            loop: false,
                            sources: [
                              {
                                src: "https://res.cloudinary.com/dhhtgppki/video/upload/v1676377583/DIH-assets/testinonials/Day_3_Video_1_Second_Cut_13.02.2023_Option_2_vcq9xb.mp4",
                                type: "video/mp4",
                              },
                            ],
                          },
                          {
                            type: "video",
                            width: 1920,
                            height: 1920,
                            poster: "/hero1.jpg",
                            autoPlay: true,
                            loop: false,
                            sources: [
                              {
                                src: "https://res.cloudinary.com/dhhtgppki/video/upload/v1676377583/DIH-assets/testinonials/Day_3_Video_1_Second_Cut_13.02.2023_Option_2_vcq9xb.mp4",
                                type: "video/mp4",
                              },
                            ],
                          },
                          {
                            type: "video",
                            width: 1920,
                            height: 1920,
                            poster: "/hero1.jpg",
                            autoPlay: true,
                            loop: false,
                            sources: [
                              {
                                src: "https://res.cloudinary.com/dhhtgppki/video/upload/v1676377583/DIH-assets/testinonials/Day_3_Video_1_Second_Cut_13.02.2023_Option_2_vcq9xb.mp4",
                                type: "video/mp4",
                              },
                            ],
                          },
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
export default HeroBanner;
