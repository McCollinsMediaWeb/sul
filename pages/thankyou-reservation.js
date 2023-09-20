import React from "react";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import Image from "next/image";
const about = () => {
  return (
    <div>
      <div className="ThankyouBoxWrap">
        <div className="ThankyouBox">
          <div>
            <div className="T1">Thank you for booking!</div>
            <div className="T2">We will call you shortly for confirmation</div>
            <div class="BannerBtnWrp">
              <div class="BannerBtns">
                <a class="BannerBtn2" href="/">
                  Go To Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InstagramComponent />
    </div>
  );
};

export default about;
