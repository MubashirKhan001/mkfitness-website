import bgimg0 from "../assets/image/about-page-1.webp"
import bgimg1 from "../assets/image/aboutImg3.jpg"

function About() {
    return (
        <section>
            <div className="h-200 mp-50 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgimg0}` }}>
                <div className="absolute left-90 font-medium top-70 text-amber-50 text-7xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
                        About Gym
                    </h1>
                    <p className="text-gray-300  md:text-lg max-w-xl text-center">
                        Build strength, boost confidence, and transform your body with professional
                        training and world-class gym equipment designed for real results.
                    </p>
                    <div className="text-center transition-all duration-500 ease-out hover:scale-[1.06]">
                        <button className="cursor-pointer font-bold sm:w-60 w-50 py-3 px-1 text-[20px] max-[391px]:text-[15px]
                          border-2 border-orange-500 rounded-2xl text-orange-500 hover:bg-orange-500 hover:text-black
                          hover:shadow-[0_0_20px_rgba(249,115,22,0.8)] transition-all duration-300">
                            JOIN NOW!
                        </button>
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
                            <i class="fa-solid fa-person-biking"></i>
                        </div>
                        <h4 className="text-white font-bold md:text-[12px] lg:text-[15px]">Modern equipment</h4>
                        <p className="text-[#a9a9a9] text-[12px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            dolore facilisis.</p>
                    </div>
                    <div className="items2 gap-y-2 px-3 flex flex-col justify-center items-center  h-[200px]">
                        <div className="hover:bg-[#f36100] w-20 h-20 rounded-[50%] bg-[#ffffff1a] flex justify-center items-center text-[#f36100] text-[30px] hover:text-white cursor-pointer transition-all duration-500 linear ">
                            <i class="fa-solid fa-glass-water"></i>
                        </div>
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
            <div className="bg-cover bg-center h-80 flex justify-center item-center"
                style={{ backgroundImage: `url(${bgimg1}` }}>
                <div className="flex justify-center item-center flex-col text-center gap-y-4">
                    <h1 className="text-white font-bold text-3xl">Don’t <span className="text-orange-500">think</span>, begin <span className="text-orange-500">today</span>!</h1>
                    <p className="text-white w-200">Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</p>
                    <div>
                        <button className="bg-orange-600 text-white py-2 px-4 text-[13px] cursor-pointer">BECOME A MEMBER</button>
                    </div>
                </div>
            </div>
            <div className="py-20 flex flex-col justify-center items-center gap-y-10 bg-[#160402]">
                <div className="flex justify-center items-center gap-y-3 flex-col">
                    <h1 className="flex gap-x-1 font-bold text-2xl uppercase text-white">Choose <span className="text-orange-600">Program</span></h1>
                    <h2 className="text-orange-600 flex gap-x-1 text-2xl"><i class="fa-solid fa-water"></i></h2>
                    <p className="text-white w-100 text-[11px] text-center">Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website.</p>
                </div>
                <div className="flex justify-center items-center gap-x-20 text-white">
                    <div className="flex justify-center items-center flex-col gap-y-6">
                        <div className="flex justify-center items-center gap-y-4 gap-x-4">
                            <div className="bg-orange-600 text-white text-3xl p-5 rounded">
                                <i class="fa-solid fa-dumbbell -rotate-45"></i>
                            </div>
                            <div>
                                <h1 className="font-medium">Basic Fitness</h1>
                                <p className="w-80 text-[11px]">Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.</p>
                                <p className="text-orange-500 text-[12px]">Discover More</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-y-4 gap-x-4">
                            <div className="bg-orange-600 text-white text-3xl p-5 rounded">
                                <i class="fa-solid fa-dumbbell -rotate-45"></i>
                            </div>
                            <div>
                                <h1 className="font-medium">New Gym Training</h1>
                                <p className="w-80 text-[11px]">If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.</p>
                                <p className="text-orange-500 text-[12px]">Discover More</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-y-4 gap-x-4">
                            <div className="bg-orange-600 text-white text-3xl p-5 rounded">
                                <i class="fa-solid fa-dumbbell -rotate-45"></i>
                            </div>
                            <div>
                                <h1 className="font-medium">Basic Muscle Course</h1>
                                <p className="w-80 text-[11px]">Credit goes to <span className="text-blue-400">Pexels website</span> for images and video background used in this HTML template.</p>
                                <p className="text-orange-500 text-[12px]">Discover More</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-y-6">
                        <div className="flex justify-center items-center gap-y-4 gap-x-4">
                            <div className="bg-orange-600 text-white text-3xl p-5 rounded">
                                <i class="fa-solid fa-dumbbell -rotate-45"></i>
                            </div>
                            <div>
                                <h1 className="font-medium">Advanced Muscle Course</h1>
                                <p className="w-80 text-[11px]">You may want to browse through <span className="text-blue-400">Digital Marketing</span> or <span className="text-blue-400">Corporate</span> HTML CSS templates on our website.</p>
                                <p className="text-orange-500 text-[12px]">Discover More</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-y-4 gap-x-4">
                            <div className="bg-orange-600 text-white text-3xl p-5 rounded">
                                <i class="fa-solid fa-dumbbell -rotate-45"></i>
                            </div>
                            <div>
                                <h1 className="font-medium">Yoga Training</h1>
                                <p className="w-80 text-[11px]">This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections.</p>
                                <p className="text-orange-500 text-[12px]">Discover More</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-y-4 gap-x-4">
                            <div className="bg-orange-600 text-white text-3xl p-5 rounded">
                                <i class="fa-solid fa-dumbbell -rotate-45"></i>
                            </div>
                            <div>
                                <h1 className="font-medium">Body Building Course</h1>
                                <p className="w-80 text-[11px]">Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.</p>
                                <p className="text-orange-500 text-[12px]">Discover More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;