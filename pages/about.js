import React from "react";

import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeMenu from "@/Components/Home-components/Home-menu/HomeMenu";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import AboutSul from "@/Components/About-us-components/AboutSul";
import SulMissions from "@/Components/About-us-components/SulMissions";
import SulVisions from "@/Components/About-us-components/SulVisions";
import AboutGallery from "@/Components/About-us-components/AboutGallery";
import HomeChef from "@/Components/Home-components/HomeChef/HomeChef";
const about = () => {
  return (
    <div>
     
     <HeroBanner title="Who We are" subtitle="From fragrant Daily Dish and hearty Breakfast to diverse Lunch, enchanting Dinner, and sizzling Shisha specialties – it's all about genuine flavors and cherished moments."/>
     <HomeChef/>
      <AboutSul/>
      <SulVisions/>
      <AboutGallery/>
      <HomeMenu/>
      <HomeReviews/>
      <InstagramComponent/>
    </div>
  );
};

export default about;
