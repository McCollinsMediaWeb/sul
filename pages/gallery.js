
import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeMenu from "@/Components/Home-components/Home-menu/HomeMenu";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import GalleryBox from "@/Components/Gallery-components/GalleryBox";

const Gallery = () => {
  return (
    <>
      <div>
      <HeroBanner  title="Explore Our Showcase"/>
      <GalleryBox/>
      <HomeMenu/>
      <HomeReviews/>
      <InstagramComponent/>
      </div>
     
    </>
  );
};

export default Gallery;
