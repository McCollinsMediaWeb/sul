
import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";

const Reviews = () => {
  return (
    <>
      <div>
      <HeroBanner title="Explore Our Customer Reviews" subtitle="Discover What Our Valued Customers Are Saying.Discover the experiences that our valued customers have shared after indulging in our authentic Middle Eastern culinary creations. "/>
      <HomeReviews/>
      
      <InstagramComponent/>
      </div>
     
    </>
  );
};

export default Reviews;
