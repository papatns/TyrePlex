import React from "react";
import TPLogo from "../../assets/TP-logo.webp";
import FbLogo from "../../assets/fb-icon.webp";
import InstaLogo from "../../assets/insta-icon.webp";

const Footer = () => {
  return (
    <div>
      <div class="custom-footer bg-white px-5 py-4 d-flex pb-0">
        <div>
          <img src={TPLogo} height="30px" width="90px" />
          <div class="d-flex gap-3 py-3 px-3">
            <img src={FbLogo} height="25px" width="20px" />
            <img src={InstaLogo} height="25px" width="25px" />
          </div>
        </div>
        <div class="d-flex ps-3 text-body">
          <div class="ps-1">
            <p class="custom-hover">Who We Are</p>
            <p class="custom-hover">Are you a Tyre Dealer?</p>
          </div>
          <div class="ps-1">
            <p class="custom-hover">Privacy Policy</p>
            <p class="custom-hover">Terms of use</p>
          </div>
          <div class="ps-1">
            <p class="custom-hover">Contact Us</p>
            <p class="custom-hover">Career</p>
            <p class="custom-hover">Shipping & Return Policy</p>
          </div>
        </div>
      </div>
      <div class="border-top py-3 bg-white text-center text-body-tertiary">©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
