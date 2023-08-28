
import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import GalleryBox from "@/Components/Gallery-components/GalleryBox";

const Gallery = () => {
  return (
    <>
      <div>
      <HeroBanner title="Showreel of Our Menu" subtitle="From our carefully crafted Daily Dish to the hearty Breakfast, Lunch, and Dinner selections where every bite tells a story of tradition and taste"/>
      <GalleryBox/>
      <HomeReviews/>
      <InstagramComponent/>
      </div>
     
    </>
  );
};

export default Gallery;
