import React from "react";
import HeroBanner from "@/Components/HeroBanner/HeroBanner";
import HomeReviews from "@/Components/Home-components/Home-Reviews/HomeReviews";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import Head from "next/head";

const Reviews = () => {
  return (
    <>
      <Head>
        <title>
          Lebanese Restaurant Dubai Sheikh Zayed Road | Dine in Dubai
        </title>
        <meta
          name="description"
          content="Find out what customers are saying about their remarkable experiences at Sul Me, the epitome of Arabic cuisine excellence. Join and share your memorable moments with us"
        />
      </Head>
      <div>
        <HeroBanner
          title="Explore Our Customer Reviews"
          subtitle="Discover What Our Valued Customers Are Saying.Discover the experiences that our valued customers have shared after indulging in our authentic Middle Eastern culinary creations. "
        />
        <HomeReviews />

        <InstagramComponent />
      </div>
    </>
  );
};

export default Reviews;
