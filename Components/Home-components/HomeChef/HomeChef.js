import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeChef = () => {
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
      <div className="bg1 HomeChefBox">
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
                <Image
                  src="/chef.jpg"
                  layout="responsive"
                  width={"429"}
                  height={"662"}
                  className="HomeAbtImage"
                />
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
                <div className="T10 color-fff">MILTON BRYANT </div>
                <div className="T9 color-fff">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidition ullamco laboris nisi ut aliquip
                  ex ea commodo condor consectetur adipiscing elit, sed do
                  eiusmod tempor incidition ullam. tempor incidition ullamco
                  laboris nisi ut aliquip ex ea commodo condor consectetur
                  adipiscing elit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeChef;
