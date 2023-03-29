import React from "react";
import HeroeSection from "./heroeSection/heroeSection";
import Solutions from "./solutions/solutions";
import SolutionsCarousel from "./solutions-carousel/solutionsCarousel";
import BitskillBrief from "./bitskillBrief/bitskillBrief";
import Proposition from "./propositionSection/propositionSection";
import Footer from "./footer/footer";

const LandingPage = () =>{
    return(
        <div className="container-fluid">
            <>
                <HeroeSection/>
                <Solutions/>
                <SolutionsCarousel/>
                <BitskillBrief/>
                <Proposition/>
                <Footer/>
            </>
        </div>
    );
}

export default LandingPage;