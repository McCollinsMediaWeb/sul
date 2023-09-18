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
      <CateringBanner title="Dubai's Premier Corporate and Private Party Catering Services
" subtitle="Elevate your parties with our top-notch catering services in Dubai, perfect for corporate and private events. Delight your guests with exquisite flavors and impeccable service"/>
      <CateringServices/>
      <InHouse/>
        <PersonalizedServices/>
        <InstagramComponent/>
    </div>
  );
};

export default index;
