import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import ReservTable1 from "@/Components/Home-components/Reserve-table/ReserveTable1";
import Head from "next/head";
const Reservation = () => {
  return (
    <>
      <Head>
        <title>
          Restaurant with Live Entertainment Dubai | Seafood Restaurant Dubai
        </title>
        <meta
          name="description"
          content="Enhance your dining experience in Dubai at Sul Me. Enjoy live entertainment and indulge in shisha while savoring delectable cuisine. Reserve your table now."
        />
      </Head>
      <div>
        <HeroBanner
          title="Reserve Your Table Now"
          subtitle="From fragrant Daily Dish and hearty Breakfast to diverse Lunch, enchanting Dinner, and sizzling Shisha specialties – it's all about genuine flavors and cherished moments."
        />
        <ReservTable1 />
        <HomeReviews />
        <InstagramComponent />
      </div>
    </>
  );
};

export default Reservation;
