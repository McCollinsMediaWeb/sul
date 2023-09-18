import React from "react";
import InstagramComponent from "@/Components/Home-components/Instagram/Instagram";
import Image from "next/image";
const about = () => {
  return (
    <div>
      <div className="ThankyouBoxWrap">
        <div className="ThankyouBox">
          <div>
            
            <div className="T1">Thank you for reaching out ! </div>
            <div className="T2">We will connect with you within 24 Hours</div>
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
