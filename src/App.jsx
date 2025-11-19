
import { useState, useEffect } from "react";
import Header from "./components/header";
import Herosec1 from "./components/hero-section/herosec1";
import Herosec2 from "./components/hero-section/herosec2";
import Herosec3 from "./components/hero-section/herosec3";
import Herosec4 from "./components/hero-section/herosec4";
import Herosec5 from "./components/hero-section/herosec5";
import Footer from "./components/footer";
import bgImg01 from "./assets/image/2.jpg"
// import bgImg02 from "./assets/image/3.jpg"

function App() {

    return (
        <>
            <div className="bg-cover bg-center h-screen overflow-x-auto"
                style={{ backgroundImage: `url(${bgImg01 }`}}>
                <Header />
                <Herosec1 />
            </div>
            <Herosec2 />
            <Herosec3 />
            <Herosec5 />
            <Herosec4 />
            <Footer />
        </>
    )

};

export default App;















