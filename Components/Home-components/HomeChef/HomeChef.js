import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
const HomeChef = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
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
  return (
    <>
      <div className="bg1 HomeChefBox pd-common">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="image-container"
                initial={{ rotate: 5, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                 {isDesktop && (
                <Image
                  src="/chef2.jpg"
                  layout="responsive"
                  width={"429"}
                  height={"662"}
                  className="HomeAbtImage"
                />
                )}

               
              </div>
            </div>
            <div className="col-md-8">
              <div
                className="SliderWrt1"
                {...animation}
                viewport={{ once: true }}
              >
                <div className="T8">
                  <span className="L1 color-fff text-uppercase">Our</span>
                  <div className="L2 color-fff">Chef</div>
                </div>
                {!isDesktop && (
 <Image
                  src="/chef2mobile.jpg"
                  layout="responsive"
                  width={"429"}
                  height={"432"}
                  className="HomeAbtImage MobileAbtImage"
                />
                )}
                <div className="T10 color-fff">Hussain Zebuck</div>
                <div className="T9 color-fff">
                Prepare for a mouthwatering journey through a fusion of Middle Eastern cuisines and palestinian cuisines as expert Chef Hussein delights Dubai with his culinary expertise.  Experience the actual essence of Middle Eastern cuisine as it has been expertly created by a true gourmet.
                </div>
                <ul className="ChefUl">
                  <li>Loved cooking</li>
                  <li>Learned from Grandma</li>
                  <li>Started his career as chef</li>
                  <li>Took part in TV show</li>
                  <li>Chefs said he has good understanding of flavours, fusions </li>
                  <li>Bringing from Palestanian food to dubai with a twist </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeChef;
