import React from "react";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import ReservTable from "@/Components/Home-components/Reserve-table/ReserveTable";
import HomeAbout from "@/Components/Home-components/Home-about/HomeAbout";
import HomeChef from "@/Components/Home-components/HomeChef/HomeChef";
import HomeMenu from "@/Components/Home-components/Home-menu/HomeMenu";
import HomeCusience from "@/Components/Home-components/Home-Cusience/HomeCusience";
import HomePromotions from "@/Components/Home-components/Home-Promotions/HomePromotions";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
const index = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <ReservTable />
      <HomeAbout/>
      <HomeChef/>
      <HomeMenu/>
      <HomeCusience/>
      <HomePromotions/>
      <HomeReviews/>
      <InstagramComponent/>
      <Footer />
    </div>
  );
};

export default index;
