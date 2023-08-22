

import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
const contact = () => {
  return (
    <div>
      <HeroBanner title="Contact Us For Your Questions"/>
      <HomeReviews/>
      <InstagramComponent/>
    </div>
  );
};

export default contact;


