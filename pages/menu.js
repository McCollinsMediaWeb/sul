import { useState, React, useEffect } from "react";
import MenuBanner from "@/Components/Home-components/MenuBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import Image from "next/image";
import Head from "next/head";
import Slider from "react-slick";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Link from "next/link";
import categoryData from "../data";
const about = () => {
  const [open, setOpen] = useState(false);
  const [CD, setCD] = useState(categoryData);
  const [activeItem, setActiveItem] = useState(0);
  const [activeDish, setActiveDish] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <title>
          Best Seafood Restaurant Dubai | Shawarma Restaurant - Sul Me
        </title>
        <meta
          name="description"
          content="Experience the authentic tastes of the Middle East cuisines at Sul Me. Explore our delectable journey through Dubai's finest Arabian, Lebanese & Palestinian cuisine."
        />
      </Head>
      <MenuBanner />
      <div className="MenuPageWarp pd-common">
        <div className="container">
          <div className="MenuHeader2">Sulme Menu</div>
          <div className="MenuRowListWrap menuSlider">
            <Slider {...settings}>
              {CD.map((items, index) => (
                <div
                  className={`MenuItem ${
                    activeItem === index ? "active" : null
                  }`}
                  onClick={() => setActiveItem(index)}
                >
                  <div
                    className="MenuItemGrid"
                    style={{ backgroundImage: `url(${items.items[0].image})` }}
                  >
                    <div className="MenuName">{items.category}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="MenuItemLiasWrap">
            <div className="row">
              {CD[activeItem].items.map((dish, index) => (
                <div
                  className="col-md-6"
                  onClick={() => {
                    setOpen(true), setActiveDish(index);
                  }}
                >
                  <div className="PrItem">
                    <div className="PrItemLeft">
                      <div className="PrItemThumb" style={{ height: "100%" }}>
                        <img
                          src={dish.image}
                          width={"110"}
                          height={"110"}
                          style={{ height: "110px", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="PrItemMiddle">
                      <div className="PrItemName">{dish.name}</div>
                      <div className="PrItemDesc">{dish.description}</div>
                      <div className="PrItemPrice">AED {dish.price}</div>
                    </div>
                    <div className="PrItemRight">
                      <div className="ReadMrBtn">Read More</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {open && (
            <div className="MenuPopupWrap">
              <div className="MenuPopup">
                <div className="full-width">
                  <div className="MenuPopupImg position-relative">
                    <div className="CloseModal" onClick={() => setOpen(false)}>
                      &nbsp;
                    </div>
                    <Image
                      src={categoryData[activeItem].items[activeDish].image}
                      layout="responsive"
                      width={"1000"}
                      height={"665"}
                      className=""
                    />
                  </div>
                  <div className="MenuPopupContent">
                    <div className="MenuPopupT1">
                      {categoryData[activeItem].items[activeDish].name}
                    </div>
                    <div className="MenuPopupT2">
                      {categoryData[activeItem].items[activeDish].description}
                    </div>
                    <div className="MenuPopupT3">
                      AED&nbsp;
                      {categoryData[activeItem].items[activeDish].price}
                    </div>
                  </div>
                  <div className="MenuPopupFooter">
                    <div className="BannerBtns">
                      <a
                        href="https://www.talabat.com/uae/sul-me-restaurant-llc"
                        target="_blank"
                        className="BannerBtn1"
                      >
                        Order Now
                      </a>

                      <Link href="/reservation" className="BannerBtn2">
                        Reserve Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <InstagramComponent />
      <HomeReviews />
    </>
  );
};

export default about;
