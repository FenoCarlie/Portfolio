import React, { useEffect } from "react";

function NavLink({ link }) {
  useEffect(() => {
    const url = location.pathname;
    console.log(url);
  });
  return (
    <a href={link.url} className={`px-3 py-1`}>
      {link.title}
    </a>
  );
}

export default NavLink;
