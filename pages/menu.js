

import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeCusience from "@/Components/Home-components/Home-Cusience/HomeCusience";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import AboutGallery from "@/Components/About-us-components/AboutGallery";
import MenuItemRow from "@/Components/Menu-Components/MenuItemRow";
const about = () => {
  return (
    <div>
      <HeroBanner title="Discover Our Menu" />
      <MenuItemRow itemname="Our Salads" bgColor="MenuBg1"/>
      <MenuItemRow itemname="Our Starters" bgColor=""/>
      <MenuItemRow itemname="Our Sides" bgColor="MenuBg1"/>
      <MenuItemRow itemname="Our Main Course" bgColor=""/>
      <MenuItemRow itemname="Our Melt In Mouth" bgColor="MenuBg1"/>
      <MenuItemRow itemname="Our Desserts" bgColor=""/>
      <HomeReviews/>
      <InstagramComponent/>
    </div>
  );
};

export default about;
