import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TfiAlignRight, TfiClose, TfiDownload } from "react-icons/tfi";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import NavMenu from "./NavMenu";

const links = [
  { url: "#home", title: "Home" },
  { url: "#about", title: "About" },
  { url: "#portfolio", title: "Portfolio" },
  { url: "#contact", title: "Contact" },
];

function NavBar() {
  const [navState, setNavState] = useState({
    open: false,
    active: "#home",
  });

  const location = useLocation();

  useEffect(() => {
    setNavState((prev) => ({ ...prev, active: location.hash }));
  }, [location]);

  const handleToggleNav = () => {
    setNavState((prev) => ({ ...prev, open: !prev.open }));
  };

  const animateNav = (open) => {
    motion(
      "ul",
      {
        width: open ? 150 : 0,
        height: open ? 200 : 0,
        opacity: open ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      }
    );
    motion(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0,
      }
    );
  };

  return (
    <div className="h-24 flex items-center bg-greyGlass justify-between px-4 sm:px-10 lg:px-20 xl:px-30 text-white select:none">
      <div className="">
        <Link to="/" className="z-50 relative">
          <span className="text-yellowClaire text-3xl font-bold ml-1">
            Carlie
          </span>
          <span className="text-4xl">.</span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        <NavMenu links={links} />
      </div>
      <button className="hidden animButton anim uppercase items-center md:flex">
        <label className="mr-2">Get resume</label>
        <TfiDownload className="w-4 h-4" />
      </button>
      <div className="md:hidden">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="z-50 relative"
          onClick={handleToggleNav}
        >
          {navState.open ? (
            <TfiClose className="w-5 h-5 hover:w-6 hover:h-6" />
          ) : (
            <TfiAlignRight className="w-5 h-5 hover:w-6 hover:h-6" />
          )}
        </motion.button>
        {navState.open && (
          <NavMenu
            links={links}
            onClick={handleToggleNav}
            onChange={(link) => console.log("link : ", link)}
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;