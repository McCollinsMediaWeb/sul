import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import MenuItemRow from "@/Components/Menu-Components/MenuItemRow";
import Head from "next/head";
const about = () => {
  return (
    <>
      <Head>
        <title>
          Best Seafood Restaurant Dubai | Shawarma Restaurant - Sul Me
        </title>
        <meta
          name="description"
          content="Experience the authentic tastes of the Middle East cuisines at Sul Me. Explore our delectable journey through Dubai's finest Arabian, Lebanese & Palestinian cuisine."
        />
      </Head>
      <div>
        <HeroBanner
          title="Discover Our Menu"
          subtitle="From the comfort of our Daily Dish to the wholesome delights of Breakfast, Lunch, and Dinner, every moment here is an opportunity to savor the authentic flavors that the region has to offer."
        />
        <MenuItemRow
          itemname="Our Salads"
          bgColor="MenuBg1"
          sectiondesc="Welcome to Our Salad Selection! Dive into a world of vibrant colors and crisp textures as we craft Middle Eastern-inspired salads that celebrate the bountiful harvest of flavors."
        />
        <MenuItemRow
          itemname="Our Starters"
          bgColor=""
          sectiondesc="Welcome to Our Salad Selection! Dive into a world of vibrant colors and crisp textures as we craft Middle Eastern-inspired salads that celebrate the bountiful harvest of flavors."
        />
        <MenuItemRow
          itemname="Our Sides"
          bgColor="MenuBg1"
          sectiondesc="Discover a delectable array of accompaniments that perfectly complement our Middle Eastern dishes"
        />
        <MenuItemRow
          itemname="Our Main Course"
          bgColor=""
          sectiondesc="Welcome to a World of Main Course Marvels! Elevate your dining experience with our exceptional selection of Middle Eastern main courses"
        />
        <MenuItemRow
          itemname="Our Melt In Mouth"
          bgColor="MenuBg1"
          sectiondesc="At Sul Me, we welcome you to enjoy a symphony of tastes that will absolutely melt in your mouth"
        />
        <MenuItemRow
          itemname="Our Desserts"
          bgColor=""
          sectiondesc="From delicate pastries oozing with honey and nuts to rich, syrup-soaked confections, our dessert selection is a celebration of the region's sweet traditions"
        />
        <HomeReviews />
        <InstagramComponent />
      </div>
    </>
  );
};

export default about;
