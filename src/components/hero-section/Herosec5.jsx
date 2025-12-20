import bgImg from "../../assets/image/3.jpg"

function Herosec5() {
    return (
        <div className="py-4 bg-cover bg-center flex justify-around items-center bg-black flex-col sm:flex-row">
            <div>
                <img className="h-110 w-380" src={bgImg} />
            </div>
            <div className="flex flex-col justify-center items-center gap-20 p-10">
                <div className="flex justify-center items-center gap-x-5">
                    <div className="flex flex-col gap-2">
                        <i className="fa-solid fa-bullseye text-orange-500 text-[30px]"></i>
                        <h1 className="text-white">Strategies</h1>
                        <p className="text-[12px] text-gray-400">Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <i className="fa-solid fa-dumbbell text-orange-500 text-[30px]"></i>
                        <h1 className="text-white">Yoga</h1>
                        <p className="text-[12px] text-gray-400"> Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-x-5">
                    <div className="flex flex-col gap-2">
                        <i className="fa-solid fa-star text-orange-500 text-[30px]"></i>
                        <h1 className="text-white">Workout</h1>
                        <p className="text-[12px] text-gray-400">Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <i className="fa-solid fa-weight-scale text-orange-500 text-[30px]"></i>
                        <h1 className="text-white">Weight Loss</h1>
                        <p className="text-[12px] text-gray-400" >Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.</p>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Herosec5;