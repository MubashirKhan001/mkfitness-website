import { Link } from "react-router-dom";
import Logo from "../assets/image/1.png";

function Footer() {


    return (
        <footer className="bg-black py-8 flex flex-col gap-y-15">
            <div className="flex justify-around items-center  text-white flex-wrap gap-y-7">
                <div className="flex gap-x-2 justify-center items-center ">
                    <div className="flex justify-center items-center bg-orange-600 text-white w-[30px] h-[30px] rounded-[50%]"><i className="fa-solid fa-location-dot"></i></div>
                    <div className="text-[10px] flex flex-col gap-y-1">
                        <p>333 Middle Winchendon Rd, Rindge,</p>
                        <p>NH 03461</p>
                    </div>
                </div>
                <div className="flex gap-x-2 justify-center items-center">
                    <div className="flex justify-center items-center bg-orange-600 text-white w-[30px] h-[30px] rounded-[50%]"><i className="fa-solid fa-mobile-button"></i></div>
                    <p className="text-[10px]">125-711-811</p>
                    <p className="text-[10px]">125-668-886</p>
                </div>
                <div className="flex gap-x-1 justify-center items-center">
                    <div className="flex justify-center items-center bg-orange-600 text-white w-[30px] h-[30px] rounded-[50%]"><i className="fa-solid fa-envelope"></i></div>
                    <p className="text-[10px] ">Support.gymcenter@gmail.com</p>
                </div>
            </div>
            <div className="flex justify-center lg:gap-x-20 md:gap-x-4 flex-col sm:flex-row flex-wrap gap-y-4 gap-x-2 items-center">
                <div className="flex gap-y-3 flex-col sm:items-start items-center">
                    <div>
                        <img className="sm:w-30 w-40" src={Logo} />
                    </div>
                    <p className="text-gray-400 text-[12px] w-[230px] sm:text-left text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.
                    </p>
                    <div className="sm:text-white text-gray-400 flex gap-x-2 sm:text-[12px] text-[15px]">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                </div>
                <div>
                    <h1 className="text-white">Useful links</h1>
                    <ul className="text-gray-400">
                        <li className="text-center">
                            <Link className="hover:text-orange-400 text-[12px]" to="/">Home</Link>
                        </li>
                        <li className="text-center">
                            <Link className="hover:text-orange-400 text-[12px]" to="/about">About</Link>
                        </li>
                        <li className="text-center">
                            <Link className="hover:text-orange-400 text-[12px]" to="/contact">Contact</Link>
                        </li>
                        <li className="text-center">
                            <Link className="hover:text-orange-400 text-[12px]" to="#">Blog</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-white">Support</h1>
                    <ul className="text-gray-400">
                        <li className="text-center">
                            <Link className="hover:text-orange-400 text-[12px]" to="#">Login</Link>
                        </li>
                        <li className="text-center">
                            <Link className="hover:text-orange-400 text-[12px]" to="#">My account</Link>
                        </li>
                        <li className="text-center">
                            <Link className="hover:text-orange-400 text-[12px]" to="#">Subscribe</Link>
                        </li>
                        <li className="text-center">
                            <Link className="hover:text-orange-400 text-[12px]" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="text-gray-400 flex flex-col gap-y-2">
                    <h1 className="text-white text-center sm:text-left">Tips & Guides</h1>
                    <p className="w-[300px] text-[12px]">Physical fitness may help prevent depression, anxiety</p>
                    <p className="w-[300px] text-[12px]">Fitness: The best exercise to lose belly fat and tone up...</p>
                </div>
            </div>
            <p className="text-[12px] text-center text-gray-400">Copyright ©2025 All rights reserved | This website is <span className="text-orange-500"><i className="fa-solid fa-heart"></i></span> mkfitnessweb</p>
        </footer>
    )

};

export default Footer;