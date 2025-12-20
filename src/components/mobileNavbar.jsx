import { useState } from "react";

const MobileNavbar = () => {

  const [menuMobile, setmenuMobile] = useState(false);
  const openIcon = <i className="fa-solid fa-xmark text-2xl"></i>;
  const closeIcon = <i className="fa-solid fa-bars text-2xl"></i>;

  return (
    <nav className="text-white p-2 sm:hidden">
      <div className="flex justify-between items-center">
        <button onClick={() => { setmenuMobile(!menuMobile) }}>
          {
            menuMobile ? openIcon : closeIcon
          }
        </button>
      </div>
      {
        menuMobile &&
        <div className="h-100 flex justify-between flex-col py-5">
          <div className="flex flex-col mt-4 space-y-3">
            <a href="#" className="hover:text-gray-400">HOME</a>
            <a href="#" className="hover:text-gray-400">ABOUT US</a>
            <a href="#" className="hover:text-gray-400">CONTACT</a>
            <a href="#" className="hover:text-gray-400">GYM SERVICE</a>
          </div>
          <div className="flex justify-center items-center  text-[#f36100] text-[20px]">
            <div className="transition-all duration-500 flex justify-center items-center cursor-pointer w-10 h-10 rounded-full hover:bg-white hover:text-[#f36100]">
              <i className="fa-solid fa-globe"></i>
            </div>

            <div className="transition-all duration-500 flex justify-center items-center cursor-pointer w-10 h-10 rounded-full hover:bg-white hover:text-[#f36100]">
              <i className="fa-brands fa-facebook"></i>
            </div>

            <div className="transition-all duration-500 flex justify-center items-center cursor-pointer w-10 h-10 rounded-full hover:bg-white hover:text-[#f36100]">
              <i className="fa-brands fa-twitter"></i>
            </div>

            <div className="transition-all duration-500 flex justify-center items-center cursor-pointer w-10 h-10 rounded-full hover:bg-white hover:text-[#f36100]">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      }
    </nav>
  )
}

export default MobileNavbar;



































