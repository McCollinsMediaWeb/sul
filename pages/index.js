import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeAbout from "@/Components/Home-components/Home-about/HomeAbout";
import HomeChef from "@/Components/Home-components/HomeChef/HomeChef";
import HomeMenu from "@/Components/Home-components/Home-menu/HomeMenu";
import HomeCusience from "@/Components/Home-components/Home-Cusience/HomeCusience";
import HomePromotions from "@/Components/Home-components/Home-Promotions/HomePromotions";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
const index = () => {
  return (
    <div>
      <HeroBanner title="Savor Authenic Middle Eastern Cuisine"/>
     
      <HomeAbout/>
      <HomeChef/>
      <HomeMenu/>
      <HomeCusience/>
      <HomePromotions/>
      <HomeReviews/>
      <InstagramComponent/>
    </div>
  );
};

export default index;
