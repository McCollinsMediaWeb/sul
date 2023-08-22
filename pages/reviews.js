
import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeMenu from "@/Components/Home-components/Home-menu/HomeMenu";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";

const Reviews = () => {
  return (
    <>
      <div>
      <HeroBanner  title="Explore Our Customer Reviews"/>
      <HomeReviews/>
      <HomeMenu/>
      
      <InstagramComponent/>
      </div>
     
    </>
  );
};

export default Reviews;
