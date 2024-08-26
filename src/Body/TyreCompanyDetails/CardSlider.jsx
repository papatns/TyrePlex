import React from 'react';
import './CardSlider.css'; // For any additional custom styling
import MRFLogo from "../../assets/MRF-Logo.png"
import CeatLogo from "../../assets/Ceat-Logo.png"
import GoodYearLOGO from "../../assets/GoodYear-Logo.png"
import JKTyresLogo from "../../assets/jk-tyres-logo.png"
import BridgeLOGO from "../../assets/Bridgestone.png"
import ApolloLOGO from "../../assets/Apollo-Logo.png"
// import MRFLOGO from "../../assets/MRF-Logo.png"
// import MRFLOGO from "../../assets/MRF-Logo.png"
// import MRFLOGO from "../../assets/MRF-Logo.png"
// import { CardHeader } from './react-bootstrap';


const CardSlider = () => {
    const brands = [
        { name: 'MRF', logo: MRFLogo },
        { name: 'CEAT', logo: CeatLogo },
        { name: 'Goodyear', logo:GoodYearLOGO  },
        { name: 'Apollo', logo: ApolloLOGO },
        { name: 'Bridgestone', logo: JKTyresLogo },
        { name: 'JK Tyre', logo: BridgeLOGO },
        { name: 'MRF', logo: MRFLogo },
        { name: 'CEAT', logo: CeatLogo },
        { name: 'Goodyear', logo:GoodYearLOGO  },
        { name: 'Apollo', logo: ApolloLOGO },
        { name: 'Bridgestone', logo: JKTyresLogo },
        { name: 'JK Tyre', logo: BridgeLOGO },
        // Add more brands if needed
    ];

    return (
        <div className="container card  my-4 bg-white">
            <div className="row flex-nowrap reviews card-body">
                {brands.map((brand, index) => (
                    <div className="col-4 col-md-2  " key={index}>
                        <div className="card card-body shadow">
                            <img src={brand.logo} width="50px" height="50px" className="card-img-top px-5 py-2" alt={brand.name} />
                            <div className="card-body">
                                <p className="card-text text-center">{brand.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSlider;