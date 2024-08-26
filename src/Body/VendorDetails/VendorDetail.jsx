
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { MdLocationOn } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import Pic1 from "../../assets/pic1.jpg";
import Pic2 from "../../assets/pic2.jpg";
import Pic3 from "../../assets/pic3.jpg";
import rev1 from "../../assets/rev1.png";
import rev2 from "../../assets/rev2.png";
import rev3 from "../../assets/rev3.png";
import rev4 from "../../assets/rev4.png";

const reviews = [
  {
    imag:rev1,
    name: "Md Nasir",
    review: "Excellent service from start to finish. 100% satisfaction with the job, professionalism, and overall service. We were delighted with your courteous, prompt, and professional service."
  },
  {
    imag:rev2,
    name: "Rohit Bhati",
    review: "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per your budget. Highly recommend."
  },
  {
    imag:rev3,
    name: "Pradeep Kumar",
    review: "Best tyre shop in Indirapuram. Good dealing with customers. All types of tyres available here. Price also responsible. Overall good experience."
  },
  {
    imag:rev1,
    name: "Md Nasir",
    review: "Excellent service from start to finish. 100% satisfaction with the job, professionalism, and overall service. We were delighted with your courteous, prompt, and professional service."
  },
  {
    imag:rev2,
    name: "Rohit Bhati",
    review: "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per your budget. Highly recommend."
  },
  {
    imag:rev3,
    name: "Pradeep Kumar",
    review: "Best tyre shop in Indirapuram. Good dealing with customers. All types of tyres available here. Price also responsible. Overall good experience."
  }
];

const images = [
  Pic1,
  Pic2,
  Pic3
];

function VendorDetail() {
  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-body ">
        <div class='top-container d-flex'>
          <div class="top-left">
          <h3 className="card-title">SHREE HEMKUNT TYRES AND SERVICES <br/><span className="text-success fs-6">✅ Verified</span></h3>
          <div className="d-flex align-items-center mb-0">
            <span className="badge bg-success me-0">4.9</span>
            <span className="mx-1">⭐ ⭐ ⭐ ⭐ ⭐</span>
            <span class="mx-3">2278 Reviews</span>
            <button className="btn btn-outline-primary btn-sm">Rate</button>
          </div>
          <div class="d-flex">
            <MdLocationOn class="location-icon1 my-3" />
            <p className="mb-0 my-3">
            PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
            </p>
          </div>
          <div class="d-flex">
            <IoIosTime class="location-icon my-3" />
            <p className="mb-0 my-3">Open - Monday to Sunday: 10:00AM to 8:00PM</p>
          </div>
          
          
          <button className="btn btn-danger mt-0">Get Directions</button>
          </div>
          <div class="top-right">
          <div className="mt-0">
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          </div>
        </div>
          
        <div className="my-4">
            <h5>2278 Google Reviews</h5>
            <div className="d-flex  reviews" style={{ gap: '16px' }}>
              {reviews.map((review, index) => (
                <div className="card" style={{ minWidth: '300px' }} key={index}>
                  <div className="card-body">
                    <img src={review.imag} width="50px" height="50px" />
                    <h6 class="my-2">{review.name}</h6>
                    <p>{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorDetail;

