
import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";

const Reviews = () => {
  return (
    <>
      <div>
      <HeroBanner  title="Explore Our Customer Reviews"/>
      <HomeReviews/>
      
      <InstagramComponent/>
      </div>
     
    </>
  );
};

export default Reviews;
