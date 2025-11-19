import Logo from "../assets/image/1.png"

function Header() {

    return (

        <header className="lg:p-8 md:p-4 flex justify-between items-center bg-cover bg-center">
            <div>
                <img className="w-[150px]" src={Logo} alt="FITNESS LOGO" />
            </div>
            <nav>
                <ul className="flex justify-center items-center gap-x-6 text-[15px]">
                    <li className="transition-all duration-500 linear hover:translate-x-1"><a className=" text-orange-600 pb-1 border-b-2" href="index.html">HOME</a></li>
                    <li className="transition-all duration-500 linear hover:translate-x-1"><a className=" hover:text-orange-600 pb-1 border-b-2 border-transparent text-white hover:border-orange-600 transition-all duration-300 linear" href="#">ABOUT US</a></li>
                    <li className="transition-all duration-500 linear hover:translate-x-1"><a className=" hover:text-orange-600 pb-1 border-b-2 border-transparent text-white hover:border-orange-600 transition-all duration-300 linear" href="#">CONTACT </a></li>
                    <li className="transition-all duration-500 linear hover:translate-x-1"><a className=" hover:text-orange-600 pb-1 border-b-2 border-transparent text-white hover:border-orange-600 transition-all duration-300 linear" href="#">GYM SERVICE</a></li>
                </ul>
            </nav>
            <div className="flex justify-center items-center gap-x-2 text-[#f36100] text-[20px]">
                <div className="transition-all duration-500 linear flex  justify-center items-center cursor-pointer w-8 h-8 rounded-[50%] hover:bg-white hover:text-shadow-orange-500">
                    <i className="fa-solid fa-globe"></i>
                </div>
                <div className="transition-all duration-500 linear flex  justify-center items-center cursor-pointer w-8 h-8 rounded-[50%] hover:bg-white hover:text-shadow-orange-500">
                    <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="transition-all duration-500 linear flex  justify-center items-center cursor-pointer w-8 h-8 rounded-[50%] hover:bg-white hover:text-shadow-orange-500">
                    <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="transition-all duration-500 linear flex  justify-center items-center cursor-pointer w-8 h-8 rounded-[50%] hover:bg-white hover:text-shadow-orange-500">
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </header>


    )
};

export default Header;