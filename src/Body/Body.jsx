import React from 'react'
import VendorDetail from './VendorDetails/VendorDetail'
import CardSlider from './TyreCompanyDetails/CardSlider'
import Service from "./Service/service"
import TyreDetails from "./TyreDetail/TyreDetails"
import Payment from "./PaymentMode/payment"
import FAQs from "./FAQ/FAQs"
import Footer from "./Footer/Footer"

const Body = () => {
  return (
    <div class="custom-body ms-2 me-2">
        <VendorDetail/>
        <CardSlider/>
        <Service/>
        <TyreDetails/>
        <Payment/>
        <FAQs/>
        <Footer/>
    </div>
  )
}

export default Body;