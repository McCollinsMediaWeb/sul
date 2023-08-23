

import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import ContactRow1 from "@/Components/Contact-Components/ContactRow1";
import ContactRow2 from "@/Components/Contact-Components/ContactRow2";
import MapBox from "@/Components/Contact-Components/MapBox";

const contact = () => {
  return (
    <div>
      <HeroBanner title="Contact Us For Your Questions"/>
      <ContactRow1/>
      <ContactRow2/>
      <MapBox/>
      <HomeReviews/>
    </div>
  );
};

export default contact;


