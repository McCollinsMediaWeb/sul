import React from "react";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import ReservTable from "@/Components/Home-components/Reserve-table/ReserveTable";
const index = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <ReservTable />
      <Footer />
    </div>
  );
};

export default index;
