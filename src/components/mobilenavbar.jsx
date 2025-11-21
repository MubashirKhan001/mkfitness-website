import { useState } from "react";

function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-white p-2 sm:hidden">
      {/* Top bar */}
      <div className="flex justify-between items-center">
        {/* Toggle Button */}
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <i className="fa-solid fa-xmark text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="h-100 flex justify-between flex-col py-5">
          {/* Menu Links */}
          <div className="flex flex-col mt-4 space-y-3">
            <a href="#" className="hover:text-gray-400">HOME</a>
            <a href="#" className="hover:text-gray-400">ABOUT US</a>
            <a href="#" className="hover:text-gray-400">CONTACT</a>
            <a href="#" className="hover:text-gray-400">GYM SERVICE</a>
          </div>

          {/* Social Icons */}
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
      )}
    </nav>
  );
}

export default MobileNavbar;
