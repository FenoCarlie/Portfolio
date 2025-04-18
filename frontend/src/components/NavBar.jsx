import { useState } from "react";
import { TfiAlignRight, TfiClose, TfiDownload } from "react-icons/tfi";
import NavLink from "./NavLink";
import { assets } from "../assets/assets";
import resume from "../assets/FENO.pdf";

const links = [
  { url: "#home", title: "Home" },
  { url: "#about", title: "About" },
  // { url: "#portfolio", title: "Portfolio" },
  { url: "#contact", title: "Contact" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const getResume = () => {
    window.open(resume, "_blank");
  };

  return (
    <div className="h-24 flex items-center bg-greyGlass justify-between px-4 sm:px-10 lg:px-20 xl:px-30 text-white select:none">
      <div className="">
        <a href="#home" className="z-50 relative">
          <img src={assets.logoCarlie} className="w-[130px]" />
        </a>
      </div>
      {/* <div className="hidden md:flex gap-4">
        <ul>
          {links.map((link) => (
            <NavLink key={link.title} link={link} />
          ))}
        </ul>
      </div> */}
      <button
        onClick={() => {
          getResume();
        }}
        className="hidden animButton anim uppercase items-center md:flex "
      >
        <label className="mr-2">Get resume</label>
        <TfiDownload className="w-4 h-4" />
      </button>
      {/* <div className="md:hidden">
        <button
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
        </button>
        {open && (
          <div className="fixed z-40 top-0 left-0 bottom-0 right-0 w-screen h-full bg-greyGlass1 text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <button
                key={links.title}
                onClick={() => {
                  //setOpen(!open);
                }}
              >
                <NavLink key={link.title} link={link} />
              </button>
            ))}
            <button
              onClick={() => {
                getResume();
              }}
              className="animButton anim flex items-center"
            >
              <label className="mr-2">Get resume</label>
              <TfiDownload className="w-7 h-7" />
            </button>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default NavBar;
