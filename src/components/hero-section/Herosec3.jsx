import herosec3Img from "../../assets/image/6.png"
function Herosec3() {
    return (
        <div className="bg-cover bg-center  h-100  flex justify-center items-center flex-col gap-y-5"
            style={{ backgroundImage: `url(${herosec3Img})` }}
        >
            <h1 className="text-white sm:text-4xl font-bold text-[22px] max-[321px]:text-[18px]">Registration now to get more deals</h1>
            <h2 className="text-gray-300 text-2xl font-bold sm:text-[22px] text-[18px] max-[321px]:text-[16px]">Where health, beauty and fitness meet.</h2>
            <div className="my-4 text-white border-2  transition-all duration-400 linear border-orange-500 hover:bg-orange-500 rounded">
                <button className="px-5 py-1 text-[14px] cursor-pointer"><a href="#">Appointment</a></button>
            </div>
        </div>
    )

};

export default Herosec3;

// https://themewagon.github.io/gutim/
// https://themewagon.github.io/gymlife/