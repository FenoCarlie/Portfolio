import { useEffect, useState } from "react";

function NavLink({ link, ref }) {
  const handleHashChange = () => {
    const url = location.hash;
    const element = document.getElementById(url.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <a
      name={link.url}
      href={link.url}
      className={`  ${location.hash === link.url && "active"} px-3 py-1`}
      ref={ref}
    >
      {link.title}
    </a>
  );
}

export default NavLink;
