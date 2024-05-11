import React, { useEffect } from "react";

function NavLink({ link }) {
  useEffect(() => {
    const url = location.hash;
    const active = url.slice(1);
    console.log(active);
  });
  return (
    <a href={link.url} className={`px-3 py-1`}>
      {link.title}
    </a>
  );
}

export default NavLink;
