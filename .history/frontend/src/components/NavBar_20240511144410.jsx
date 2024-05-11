import { useEffect, useState } from "react";
import { TfiAlignRight, TfiClose, TfiDownload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { useAnimate, stagger, motion } from "framer-motion";

const links = [
  { url: "#home", title: "Home" },
  { url: "#about", title: "About" },
  { url: "#portfolio", title: "Portfolio" },
  { url: "#contact", title: "Contact" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const [active, setActive] = useState();
  const staggerList = stagger(0.1, { startDelay: 0.25 });
  useEffect(() => {
    const url = location.hash;
    if (url == "") {
      return setActive("#home");
    }
    window.addEventListener("hashchange", function () {
      const url = location.hash;
      setActive(url);
    });
  }, []);

  useEffect(() => {
    animate(
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
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0,
      }
    );
  }, [open]);

  return (
    <div className="h-24 flex items-center bg-greyGlass justify-between px-4 sm:px-10 lg:px-20 xl:px-30 text-white select:none">
      <div className="">
        <Link href="/" className="z-50 relative">
          <span className=" text-yellowClaire text-3xl font-bold ml-1">
            Carlie
          </span>
          <span className="text-4xl">.</span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        <ul>
          {links.map((link) => (
            <NavLink key={link.title} link={link} />
          ))}
        </ul>
      </div>
      <button className="hidden animButton anim uppercase items-center md:flex ">
        <label className="mr-2">Get resume</label>
        <TfiDownload className="w-4 h-4" />
      </button>
      <div className="md:hidden">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="z-50 relative"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <TfiClose className="w-5 h-5 hover:w-6 hover:h-6" />
          ) : (
            <TfiAlignRight className="w-5 h-5 hover:w-6 hover:h-6" />
          )}
        </motion.button>
        {open && (
          <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-full bg-greyGlass1 text-white flex flex-col items-center justify-center gap-8 text-4xl">
            <ul>
              {links.map((link) => (
                <motion.li
                  key={links.title}
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <NavLink
                    key={link.title}
                    link={link}
                    onChange={() => {
                      console.log("link : ", link);
                    }}
                  />
                </motion.li>
              ))}
            </ul>
            <button className="animButton anim flex items-center">
              <label className="mr-2">Get resume</label>
              <TfiDownload className="w-7 h-7" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
