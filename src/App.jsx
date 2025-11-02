
import Header from "./components/header";
import Herosec1 from "./components/hero-section/herosec1";
import Herosec2 from "./components/hero-section/herosec2";
import bgImg from "./assets/image/2.jpg"

function App() {

    return (
        <>
            <div className="bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${bgImg})` }}>
                <Header />
                <Herosec1 />
            </div>
            <Herosec2 />
        </>
    )

};

export default App;