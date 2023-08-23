import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Video from "yet-another-react-lightbox/plugins/video";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

const HeroBanner = (props) => {
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
  return (
    <div className="HeroBannerWrp">
      {isDesktop && (
        <Image
          src="/hero1.jpg"
          layout="responsive"
          width={"1440"}
          height={"900"}
          priority={true}
          className="MainBanner"
        />
      )}
      {!isDesktop && (
        <Image
          src="/hero1mobile.jpg"
          layout="responsive"
          width={"612"}
          height={"900"}
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
                With a menu that can be as authentically Middle East as it can be, we have a menu comprising of delicious main courses, flavorful desserts, and refreshing beverages. 
                </div>
                <div>
                  <div className="BannerBtnWrp">
                    <div className="BannerBtns">
                      <a
                        href="javascript:void(0);"
                        className="BannerBtn1"
                        onClick={() => setOpen(true)}
                      >
                        Play Now
                      </a>
                      <Link href={"/"} className="BannerBtn2">
                        Reserve Now
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
