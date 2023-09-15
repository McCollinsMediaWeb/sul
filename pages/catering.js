import React from "react";
import CateringBanner from "@/Components/catering/CateringBanner";
import PersonalizedServices from "@/Components/catering/PersonalizedServices";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import InHouse from "@/Components/catering/InHouse";
import CateringServices from "@/Components/catering/cateringServices";

import useMediaQuery from "@/hooks/useMediaQuery";

const index = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <div>
      <CateringBanner title="Corporate & Private Catering Services In Dubai" subtitle="From fragrant Daily Dish and hearty Breakfast to diverse Lunch, enchanting Dinner, and sizzling Shisha specialties – it's all about genuine flavors and cherished moments."/>
      <CateringServices/>
      <InHouse/>
        <PersonalizedServices/>
        <InstagramComponent/>
    </div>
  );
};

export default index;
