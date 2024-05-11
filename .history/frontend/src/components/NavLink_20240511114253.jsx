import React, { useEffect } from "react";

function NavLink({ link }) {
  useEffect(() => {
    window.addEventListener("hashchange", function () {
      const url = location.hash;
      const active = url.slice(1);
      console.log(active);
    });
  });
  return (
    <a
      href={link.url}
      className={`  ${
        pathName === link.url && "bg-yellowClaire text-black rounded"
      } px-3 py-1`}
    >
      {link.title}
    </a>
  );
}

export default NavLink;