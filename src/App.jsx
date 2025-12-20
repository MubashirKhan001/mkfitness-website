
import Header from "./components/Header";
import Herosec1 from "./components/hero-section/Herosec1";
import Herosec2 from "./components/hero-section/Herosec2";
import Herosec3 from "./components/hero-section/Herosec3";
import Herosec4 from "./components/hero-section/Herosec4";
import Herosec5 from "./components/hero-section/Herosec5";
import Footer from "./components/Footer";
import bgImg01 from "./assets/image/2.jpg";

function App() {

    return (
        <>
            <div className="bg-cover bg-center h-screen overflow-x-hidden"
                style={{ backgroundImage: `url(${bgImg01}`}}>
                <Header />
                <Herosec1 />
            </div>
            <Herosec2 />
            <Herosec3 />
            <Herosec4 />
            <Herosec5 />
            <Footer />
        </>
    )

};

export default App;















