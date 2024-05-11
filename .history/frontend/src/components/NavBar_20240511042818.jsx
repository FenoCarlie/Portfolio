import { useState } from "react";
import { TfiAlignRight, TfiClose, TfiDownload } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";

const links = [
  { url: "#home", title: "Home" },
  { url: "#about", title: "About" },
  { url: "#portfolio", title: "Portfolio" },
  { url: "#contact", title: "Contact" },
];

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-10 lg:px-20 xl:px-30 text-white">
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
            <Link to={link.url} key={link.title} className="px-3 py-1">
              {link.title}
            </Link>
          ))}
        </ul>
      </div>
      <button className="hidden animButton anim uppercase items-center md:flex ">
        <label className="mr-2">Get resume</label>
        <TfiDownload className="w-4 h-4" />
      </button>
      <div className="md:hidden">
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
          <div className="absolute top-0 left-0 w-screen h-screen bg-greyGlass1 text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <button
                key={links.title}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <NavLink to={link.url} key={link.title} className="px-3 py-1">
                  {link.title}
                </NavLink>
              </button>
            ))}
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
