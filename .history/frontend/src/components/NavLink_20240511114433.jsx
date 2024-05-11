import React, { useEffect, useState } from "react";

function NavLink({ link }) {
    const [active, setActive] = useState()
  useEffect(() => {
    window.addEventListener("hashchange", function () {
      const url = location.hash;
      const setActive(url.slice(1));
      console.log(active);
    });
  });
  return (
    <a
      href={link.url}
      className={`  ${
        active === link.url && "bg-yellowClaire text-black rounded"
      } px-3 py-1`}
    >
      {link.title}
    </a>
  );
}

export default NavLink;
