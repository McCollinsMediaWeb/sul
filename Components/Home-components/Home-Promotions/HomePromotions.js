import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const HomePromotions = () => {
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
    <div className="PromotionalBlock">
      <div className="position-relative PrBlock1">
        <Image
          src="/pr.jpg"
          layout="responsive"
          width={"1440"}
          height={"542"}
          className="PrBlock1Img"
        />

        <div className="PrBlock1C">
          <div className="container">
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <div className="Ct1 text-uppercase">shisha</div>
              <div className="Ct2 color-fff">Discount</div>
              <div className="Ct3 text-uppercase color-fff">50% OFF</div>
              <div className="Ct4">On first booking</div>
              <a class="T7" href="/">
                Reserve Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePromotions;
