import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
const Navbar = () => {
  //! seven step
  const [nav, setNav] = useState(false);
  const changeNav = () => setNav(!nav);

  // nav color
  const [navColor, setNavColor] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    //! first step of className
    <nav
      className={
        "fixed w-full flex justify-between items-center px-5 z-50 py-3 transition-colors duration-500" +
        (navColor && "bg-orange-100/80 shadow-md")
      }
    >
      {/* logo */}
      {/* second step of className */}
      <a href="#home" className="font-bold italic text-gray-600 text-xl z-20">
        Mik Smith
      </a>
      {/* navigation */}
      {/* fourth step of className */}
      {/* six step of className sm:hidden */}
      {/* eight step of className { + code here} takenote this step we need to erase sm:hidden */}
      {/* nine step sm:top-0 sm:left-0 sm:h-screen sm:w-full sm:bg-orange-100/95 */}
      {/* eleven step sm:flex-col sm:items-center sm:justify-center sm:text-3xl z-10 sm:gap-y-4 */}
      <div
        className={
          "cursor-pointer flex gap-x-7 text-xs font-medium text-gray-600 sm:top-0 sm:left-0 sm:h-screen sm:w-full sm:bg-orange-100/95 sm:flex-col sm:justify-center sm:items-center sm:gap-y-4 sm:text-3xl z-10 " +
          (nav ? "sm:fixed" : "sm:hidden")
        }
      >
        <a href="#home" className="hover:underline ">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#skills" className="hover:underline">
          Skills
        </a>
        <a href="#project" className="hover:underline">
          Projects
        </a>
        <a href="#contacts" className="hover:underline">
          Contact
        </a>
      </div>
      {/* haumberger */}
      {/* third step of className */}
      {/* fifth step of className sm:block */}
      {/* ten step of className z-20 */}
      <div
        className="hidden sm:block cursor-pointer text-gray-600 text-2xl z-20"
        onClick={changeNav}
      >
        {nav ? <HiX /> : <HiOutlineMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
