
import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import GalleryBox from "@/Components/Gallery-components/GalleryBox";

const Gallery = () => {
  return (
    <>
      <div>
      <HeroBanner  title="Explore Our Showcase"/>
      <GalleryBox/>
      <HomeReviews/>
      <InstagramComponent/>
      </div>
     
    </>
  );
};

export default Gallery;
