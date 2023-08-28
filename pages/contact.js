

import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import ContactRow1 from "@/Components/Contact-Components/ContactRow1";
import ContactRow2 from "@/Components/Contact-Components/ContactRow2";
import MapBox from "@/Components/Contact-Components/MapBox";

const contact = () => {
  return (
    <div>
      <HeroBanner title="Contact us for your questions" subtitle="Got Questions? We're Here to Help! Feel free to reach out to us for any inquiries you may have. Our friendly team is ready to assist you. Get in touch with us today!"/>
      <ContactRow1/>
      <ContactRow2/>
      <MapBox/>
      <HomeReviews/>
    </div>
  );
};

export default contact;


