import React, { useEffect } from "react";

function NavLink({ link }) {
  useEffect(() => {
    const url = location.hash;
    console.log(url.slice(1));
  });
  return (
    <a href={link.url} className={`px-3 py-1`}>
      {link.title}
    </a>
  );
}

export default NavLink;
