import bgImg01 from "../assets/image/2.webp";
import herosec3Img from "../assets/image/6.png"
import bgImg from "../assets/image/3.jpg"
function Home() {
    return (
        
            <main>
                <div className="relative bg-cover bg-center h-screen overflow-x-hidden"
                    style={{ backgroundImage: `url(${bgImg01}` }}>
                    <div className="absolute right-10 sm:top-80 sm:left-auto left-4 max-[426px]:left-21 max-[321px]:left-10 text-white flex flex-col gap-y-5 font-bold font-serif">
                        <p className="text-[20px] max-[391px]:text-[25px] font-normal">Shape your body</p>
                        <h1 className="sm:text-5xl text-4xl  w-[350px] flex flex-col gap-y-3"><strong>Be <span className="text-orange-500">strong</span></strong> Traning hard</h1>
                        <div className="ps-4 transition-all duration-500 linear text-orange-500 mt-8  bg-transparent hover:scale-[1.066] ">
                            <button className="font-bold sm:w-60 w-50 border-2 max-[391px]:w-40 border-orange-500 rounded-2xl  py-2 px-1 cursor-pointer text-[20px] max-[391px]:text-[15px]">JOIN NOW!</button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#160402] flex justify-around items-center flex-col pt-15">
                    <div className="textxontainer flex justify-center items-center flex-col gap-y-2">
                        <p className="text-[#f36100]">Why chose us?</p>
                        <h2 className="text-white text-[18px] font-bold">PUSH YOUR LIMITS FORWARD</h2>
                    </div>
                    <div className="flex justify-around items-center gap-3 sm:h-[350px] h-full px-3 sm:flex-nowrap flex-wrap">
                        <div className="items1 gap-y-2 px-3 flex flex-col justify-center items-center  h-[200px]">
                            <div className="hover:bg-[#f36100] w-20 h-20 rounded-[50%] bg-[#ffffff1a] flex justify-center items-center  text-[#f36100] text-[30px] hover:text-white cursor-pointer transition-all duration-500 linear " >
                                <i className="fa-solid fa-gauge"></i>
                            </div>
                            <h4 className="text-white font-bold md:text-[12px] lg:text-[15px]">Modern equipment</h4>
                            <p className="text-[#a9a9a9] text-[12px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                dolore facilisis.</p>
                        </div>
                        <div className="items2 gap-y-2 px-3 flex flex-col justify-center items-center  h-[200px]">
                            <div className="hover:bg-[#f36100] w-20 h-20 rounded-[50%] bg-[#ffffff1a] flex justify-center items-center text-[#f36100] text-[30px] hover:text-white cursor-pointer transition-all duration-500 linear "><i className="fa-solid fa-martini-glass "></i></div>
                            <h4 className="text-white font-bold md:text-[12px] lg:text-[15px]">Healthy nutrition plan</h4>
                            <p className="text-[#a9a9a9] text-[12px]  text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                dolore facilisis.</p>
                        </div>
                        <div className="items3 gap-y-2 px-3 flex flex-col justify-center items-center  h-[200px]">
                            <div className="hover:bg-[#f36100] w-20 h-20 rounded-[50%] bg-[#ffffff1a] flex justify-center items-center text-[#f36100] text-[30px] hover:text-white cursor-pointer transition-all duration-500 linear "><i className="fa-solid fa-dumbbell "></i></div>
                            <h4 className="text-white font-bold md:text-[11px] lg:text-[15px]">Proffesponal training plan</h4>
                            <p className="text-[#a9a9a9] text-[12px]  text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                dolore facilisis.</p>
                        </div>
                        <div className="items4 gap-y-2 px-3 flex flex-col justify-center items-center  h-[200px]">
                            <div className="hover:bg-[#f36100] w-20 h-20 rounded-[50%] bg-[#ffffff1a] flex justify-center items-center text-[#f36100] text-[30px] hover:text-white cursor-pointer transition-all duration-500 linear "><i className="fa-solid fa-heart-pulse "></i></div>
                            <h4 className="text-white font-bold md:text-[12px] lg:text-[15px]">Unique to your needs</h4>
                            <p className="text-[#a9a9a9] text-[12px]  text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                dolore facilisis.</p>
                        </div>0
                    </div>
                </div>
                <div className="bg-cover bg-center  h-100  flex justify-center items-center flex-col gap-y-5"
                    style={{ backgroundImage: `url(${herosec3Img})` }}
                >
                    <h1 className="text-white sm:text-4xl font-bold text-[22px] max-[321px]:text-[18px]">Registration now to get more deals</h1>
                    <h2 className="text-gray-300 text-2xl font-bold sm:text-[22px] text-[18px] max-[321px]:text-[16px]">Where health, beauty and fitness meet.</h2>
                    <div className="my-4 text-white border-2  transition-all duration-400 linear border-orange-500 hover:bg-orange-500 rounded">
                        <button className="px-5 py-1 text-[14px] cursor-pointer"><a href="#">Appointment</a></button>
                    </div>
                </div>
                <div className="sm:h-120 h-full pt-5 bg-[#151515]">
                    <h1 className="text-center text-orange-500 font-bold" >Our Plan</h1>
                    <h1 className="text-center text-white  font-bold">Choose your pricing plan</h1>

                    <div className="flex justify-center items-center pt-6 lg:gap-x-10 md:gap-x-4  gap-y-4 flex-wrap">
                        <div className="hover:text-black text-center text-white border-2 hover:border-orange-500  border-gray-500 py-8 px-10 -skew-x-8 hover:bg-white  transition-all duration-400 linear">
                            <h2 className="font-bold">Class drop-in</h2>
                            <div className="flex flex-col justify-center items-center  gap-y-1">
                                <h1 className="text-orange-500 font-bold text-[30px]">$ 39.0</h1>
                                <h4 className="text-gray-300">SINGLE CLASS</h4>
                                <p className="text-gray-400 text-[12px]">Free riding</p>
                                <p className="text-gray-400 text-[12px]">Unlimited equipments</p>
                                <p className="text-gray-400 text-[12px]">Personal trainer</p>
                                <p className="text-gray-400 text-[12px]">Weight losing classes</p>
                                <p className="text-gray-400 text-[12px]">Month to mouth</p>
                                <p className="text-gray-400 text-[12px]">No time restriction</p>
                            </div>
                            <div className="text-center mt-3 px-4 py-1 text-white transition-all duration-400 linear  bg-[#333333]">
                                <button className="px-4 py-1 text-[14px] cursor-pointer"><a href="#" className="">Enroll now</a></button>
                            </div>
                        </div>
                        <div className="hover:text-black text-white  border-2 border-gray-500 hover:border-orange-500 py-8 px-10 -skew-x-8 hover:bg-white transition-all  duration-400 linear">
                            <h2 className="font-bold">12 Month unlimited</h2>
                            <div className="flex flex-col justify-center items-center gap-y-1">
                                <h1 className="text-orange-500 font-bold text-[30px]">$ 99.0</h1>
                                <h4 className="text-gray-300">SINGLE CLASS</h4>
                                <p className="text-gray-400 text-[12px]">Free riding</p>
                                <p className="text-gray-400 text-[12px]">Unlimited equipments</p>
                                <p className="text-gray-400 text-[12px]">Personal trainer</p>
                                <p className="text-gray-400 text-[12px]">Weight losing classes</p>
                                <p className="text-gray-400 text-[12px]">Month to mouth</p>
                                <p className="text-gray-400 text-[12px]">No time restriction</p>
                            </div>
                            <div className="text-center mt-3 px-4 py-1 text-white transition-all duration-400 linear  bg-[#333333]">
                                <button className="px-4 py-1 text-[14px] cursor-pointer"><a href="#" className="">Enroll now</a></button>
                            </div>
                        </div>
                        <div className="hover:text-black text-white border-2 border-gray-500  hover:border-orange-500 py-8 px-10 -skew-x-8 hover:bg-white transition-all  duration-400 linear">
                            <h2 className="font-bold">6 Month unlimited</h2>
                            <div className="flex flex-col justify-center items-center  gap-y-1">
                                <h1 className="text-orange-500 font-bold text-[30px]">$ 59.0</h1>
                                <h4 className="text-gray-300">SINGLE CLASS</h4>
                                <p className="text-gray-400 text-[12px]">Free riding</p>
                                <p className="text-gray-400 text-[12px]">Unlimited equipments</p>
                                <p className="text-gray-400 text-[12px]">Personal trainer</p>
                                <p className="text-gray-400 text-[12px]">Weight losing classes</p>
                                <p className="text-gray-400 text-[12px]">Month to mouth</p>
                                <p className="text-gray-400 text-[12px]">No time restriction</p>
                            </div>
                            <div className="text-center mt-3 px-4 py-1 text-white transition-all duration-400 linear  bg-[#333333] ">
                                <button className="px-4 py-1 text-[14px] cursor-pointer"><a href="#" className="">Enroll now</a></button>
                            </div>
                        </div>
                    </div>
                </div>
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
            </main >
    )

};

export default Home;


