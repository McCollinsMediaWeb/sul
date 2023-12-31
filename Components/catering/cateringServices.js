import React, { useState } from "react";
import CateringForm from "@/Components/catering/CateringForm";
const CateringServices = () => {
  const [open, setOpen] = useState(false);
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
    ],
  };
  const [ToggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const getActiveClass = (index, className) => {
    ToggleState === index ? className : "";
  };

  return (
    <div>
      <div className="pd-common bg1 cateringServices" id="ourservices">
        <div className="container">
          <div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="Header1 text-center">
              <div className="Header1Txt color-fff text-uppercase">
                <span>Our Party Catering Choices</span>
              </div>
            </div>
            <div className="Header2 text-center">
              From corporate gatherings to private celebrations, savor the
              finest in catering. Choose your package:
            </div>
          </div>
          <div className="FormStepWrap">
            <div className="FormStep1">
              <div>
                <div className="FormFlex1">
                  <div className="FormFlex1Item">
                    <div
                      className={`formBtn1 ${
                        ToggleState === 1 ? "active" : ""
                      }`}
                      onClick={() => toggleTab(1)}
                    >
                      Breakfast
                    </div>
                  </div>
                  <div className="FormFlex1Item">
                    <div
                      className={`formBtn1 ${
                        ToggleState === 2 ? "active" : ""
                      }`}
                      onClick={() => toggleTab(2)}
                    >
                      Brunch
                    </div>
                  </div>
                  <div className="FormFlex1Item">
                    <div
                      className={`formBtn1 ${
                        ToggleState === 3 ? "active" : ""
                      }`}
                      onClick={() => toggleTab(3)}
                    >
                      Lunch
                    </div>
                  </div>
                  <div className="FormFlex1Item">
                    <div
                      className={`formBtn1 ${
                        ToggleState === 4 ? "active" : ""
                      }`}
                      onClick={() => toggleTab(4)}
                    >
                      Dinner
                    </div>
                  </div>
                  <div className="FormFlex1Item">
                    <div
                      className={`formBtn1 ${
                        ToggleState === 5 ? "active" : ""
                      }`}
                      onClick={() => toggleTab(5)}
                    >
                      Custom
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {ToggleState === 1 && <CateringForm Title="Breakfast" />}
      {ToggleState === 2 && <CateringForm Title="Brunch" />}
      {ToggleState === 3 && <CateringForm Title="Lunch" />}
      {ToggleState === 4 && <CateringForm Title="Dinner" />}
      {ToggleState === 5 && <CateringForm Title="Custom" />}
    </div>
  );
};

export default CateringServices;
