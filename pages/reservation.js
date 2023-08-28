import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import ReservTable1 from "@/Components/Home-components/Reserve-table/ReserveTable1";
const Reservation = () => {
  return (
    <div>
       <HeroBanner title="Reserve Your Table Now" subtitle="From fragrant Daily Dish and hearty Breakfast to diverse Lunch, enchanting Dinner, and sizzling Shisha specialties – it's all about genuine flavors and cherished moments."/>
      <ReservTable1 />
      <HomeReviews/>
      <InstagramComponent/>
    </div>
  );
};

export default Reservation;

