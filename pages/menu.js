import { useState, React} from "react";
import MenuBanner from "@/Components/Home-components/MenuBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import Image from "next/image";
import Head from "next/head";
import Slider from "react-slick";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Link from "next/link";
const about = () => {
  const [open, setOpen] = useState(false);
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
              <div className="MenuItem active">
                <div className="MenuItemGrid m1">
                  <div className="MenuName">Starters</div>
                </div>
              </div>
              <div className="MenuItem">
                <div className="MenuItemGrid m2">
                  <div className="MenuName">Salads</div>
                </div>
              </div>
              <div className="MenuItem ">
                <div className="MenuItemGrid m3">
                  <div className="MenuName">Shawarma</div>
                </div>
              </div>
              <div className="MenuItem">
                <div className="MenuItemGrid m4">
                  <div className="MenuName">Main Course</div>
                </div>
              </div>
              <div className="MenuItem">
                <div className="MenuItemGrid m5">
                  <div className="MenuName">From The Sea</div>
                </div>
              </div>
              <div className="MenuItem">
                <div className="MenuItemGrid m6">
                  <div className="MenuName">Pizza</div>
                </div>
              </div>
              <div className="MenuItem">
                <div className="MenuItemGrid m7">
                  <div className="MenuName">Georgia</div>
                </div>
              </div>
              <div className="MenuItem">
                <div className="MenuItemGrid m8">
                  <div className="MenuName">Penne Pasta</div>
                </div>
              </div>
              <div className="MenuItem">
                <div className="MenuItemGrid m9">
                  <div className="MenuName">Desserts</div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="MenuItemLiasWrap">
            <div className="row">
              <div className="col-md-6"  onClick={() => setOpen(true)}>
                <div className="PrItem">
                  <div className="PrItemLeft">
                    <div className="PrItemThumb">
                      <Image
                        src="/menuimages/thumb/starter3.jpg"
                        layout="responsive"
                        width={"300"}
                        height={"300"}
                        priority={true}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="PrItemMiddle">
                    <div className="PrItemName">hummus</div>
                    <div className="PrItemDesc">Tradional hummus</div>
                    <div className="PrItemPrice">AED 25</div>
                  </div>
                  <div className="PrItemRight">
                    <div className="ReadMrBtn">Read More</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" onClick={() => setOpen(true)}>
                <div className="PrItem">
                  <div className="PrItemLeft">
                    <div className="PrItemThumb">
                      <Image
                        src="/menuimages/thumb/salads.jpg"
                        layout="responsive"
                        width={"300"}
                        height={"300"}
                        priority={true}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="PrItemMiddle">
                    <div className="PrItemName">Falafel</div>
                    <div className="PrItemDesc">Tradional hummus</div>
                    <div className="PrItemPrice">AED 25</div>
                  </div>
                  <div className="PrItemRight">
                    <div className="ReadMrBtn">Read More</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" onClick={() => setOpen(true)}>
                <div className="PrItem">
                  <div className="PrItemLeft">
                    <div className="PrItemThumb">
                      <Image
                        src="/menuimages/thumb/shawarma.jpg"
                        layout="responsive"
                        width={"300"}
                        height={"300"}
                        priority={true}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="PrItemMiddle">
                    <div className="PrItemName">Risotto shrimps</div>
                    <div className="PrItemDesc">Tradional hummus</div>
                    <div className="PrItemPrice">AED 25</div>
                  </div>
                  <div className="PrItemRight">
                    <div className="ReadMrBtn">Read More</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" onClick={() => setOpen(true)}>
                <div className="PrItem">
                  <div className="PrItemLeft">
                    <div className="PrItemThumb">
                      <Image
                        src="/menuimages/thumb/main.jpg"
                        layout="responsive"
                        width={"300"}
                        height={"300"}
                        priority={true}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="PrItemMiddle">
                    <div className="PrItemName">Fried calamari</div>
                    <div className="PrItemDesc">Tradional hummus</div>
                    <div className="PrItemPrice">AED 25</div>
                  </div>
                  <div className="PrItemRight">
                    <div className="ReadMrBtn">Read More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {open && (
          <div className="MenuPopupWrap">
            <div className="MenuPopup">
              <div className="full-width">
              <div className="MenuPopupImg position-relative">
                <div className="CloseModal"  onClick={() => setOpen(false)}>&nbsp;</div>
                <Image
                  src="/menuimages/original/a.jpg"
                  layout="responsive"
                  width={"1000"}
                  height={"665"}
                  className=""
                />
              </div>
              <div className="MenuPopupContent">
                <div className="MenuPopupT1">Risoto Shrimps</div>
                <div className="MenuPopupT2">Traditional Hummus</div>
                <div className="MenuPopupT3">AED 54</div>
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
