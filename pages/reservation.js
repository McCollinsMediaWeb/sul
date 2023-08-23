import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import ReservTable1 from "@/Components/Home-components/Reserve-table/ReserveTable1";
const Reservation = () => {
  return (
    <div>
      <HeroBanner title="Savor Authenic Middle Eastern Cuisine"/>
      <ReservTable1 />
      <HomeReviews/>
      <InstagramComponent/>
    </div>
  );
};

export default Reservation;

