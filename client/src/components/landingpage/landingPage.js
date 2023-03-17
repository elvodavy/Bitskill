import React from "react";
import HeroeSection from "./heroeSection/heroeSection";
import Solutions from "./solutions/solutions";
import SolutionsCarousel from "./solutions-carousel/solutionsCarousel";
import BitskillBrief from "./bitskillBrief/bitskillBrief";

const LandingPage = () =>{

    return(
        <div className="container-fluid">
            <>
                <HeroeSection/>
                <Solutions/>
                <SolutionsCarousel/>
                <BitskillBrief/>
            </>
        </div>
    );
}

export default LandingPage;