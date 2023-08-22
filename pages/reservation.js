import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import ReservTable from "@/Components/Home-components/Reserve-table/ReserveTable";
import HomeMenu from "@/Components/Home-components/Home-menu/HomeMenu";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
const Reservation = () => {
  return (
    <div>
      <HeroBanner title="Savor Authenic Middle Eastern Cuisine"/>
      <ReservTable />
      <HomeMenu/>
      <HomeReviews/>
      <InstagramComponent/>
    </div>
  );
};

export default Reservation;

