import React, { useEffect } from "react";

function NavLink() {
  useEffect(() => {
    const url = location.pathname;
    console.log(url);
  });
  return <div>NavLink</div>;
}

export default NavLink;
