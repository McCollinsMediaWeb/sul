import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeAbout from "@/Components/Home-components/Home-about/HomeAbout";
import HomeChef from "@/Components/Home-components/HomeChef/HomeChef";
import HomeMenu from "@/Components/Home-components/Home-menu/HomeMenu";
import HomeCusience from "@/Components/Home-components/Home-Cusience/HomeCusience";
import HomePromotions from "@/Components/Home-components/Home-Promotions/HomePromotions";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import useMediaQuery from "@/hooks/useMediaQuery";
const index = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <div>
      <HeroBanner title="Explore Middle Eastern cuisine with us" subtitle="From fragrant Daily Dish and hearty Breakfast to diverse Lunch, enchanting Dinner, and sizzling Shisha specialties – it's all about genuine flavors and cherished moments."/>
      {isDesktop && (
      <HomeAbout/>
      )}
      <HomeChef/>
      <HomeMenu/>
      
      <HomeCusience/>
      <HomePromotions/>
      {!isDesktop && (
        <HomeAbout/>
      )}
      
      <HomeReviews/>
      <InstagramComponent/>
    </div>
  );
};

export default index;
