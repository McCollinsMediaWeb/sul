import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeAbout from "@/Components/Home-components/Home-about/HomeAbout";

import HomeMenu from "@/Components/Home-components/Home-menu/HomeMenu";
import HomeCusience from "@/Components/Home-components/Home-Cusience/HomeCusience";
import HomePromotions from "@/Components/Home-components/Home-Promotions/HomePromotions";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";

import useMediaQuery from "@/hooks/useMediaQuery";
import Head from "next/head";

const index = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <>
      <Head>
        <title>
          Best Arabic Restaurant Sheikh Zayed Road | Labanese Dishes - Sul Me
        </title>
        <meta
          name="description"
          content="Discover the flavors of Lebanese, Arabic, salad cuisine, and seafood dishes at Sul Me Restaurant, the best Arabic restaurant on Sheikh Zayed Road. Order now"
        />
      </Head>
      <div>
        <HeroBanner
          title="Explore Middle Eastern cuisine with us"
          subtitle="From fragrant Daily Dish and hearty Breakfast to diverse Lunch, enchanting Dinner, and sizzling Shisha specialties – it's all about genuine flavors and cherished moments."
        />

        {isDesktop && <HomeAbout />}

        <HomeMenu />

        <HomeCusience />
        <HomePromotions />
        {!isDesktop && <HomeAbout />}

        <HomeReviews />
        <InstagramComponent />
      </div>
    </>
  );
};

export default index;
