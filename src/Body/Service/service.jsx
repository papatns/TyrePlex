import React from 'react'
import WheelBalacing from "../../assets/wheel-alignment-bal.webp"
import WheelAlingment from "../../assets/wheel-alignment.webp"


const service = () => {
    const services = [
        { name: 'Wheel Alignment', logo : WheelBalacing },
        { name: 'Wheel Balacing', logo : WheelAlingment}
        
    ];


  return (
    <div class="container card ">
        <h5 class="px-4 py-3">Services offered by this dealer </h5>
        <div class=" d-flex flex-row gap-5 m-4">
        {services?.map((item)=>{
            return <div class='border rounded d-flex flex-column w-25 gap-3 shadow-lg'>
            <img src={item?.logo} class="mt-1 ms-1" width='150px'/>
            <p class="text-center">{item?.name}</p>
            {/* <h2>{item?.name}</h2> */}
            <button class='btn btn-danger mt-0 m-5'>Book Now</button>
            </div>
        })}

        </div>
    </div>
  )
}

export default service