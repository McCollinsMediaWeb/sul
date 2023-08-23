

import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import ContactRow1 from "@/Components/Contact-Components/ContactRow1";
import ContactRow2 from "@/Components/Contact-Components/ContactRow2";
const contact = () => {
  return (
    <div>
      <HeroBanner title="Contact Us For Your Questions"/>
      <ContactRow1/>
      <ContactRow2/>
      <HomeReviews/>
      <InstagramComponent/>
    </div>
  );
};

export default contact;


