import { useEffect, useState } from "react";

function NavLink({ link }) {
  const [active, setActive] = useState();
  useEffect(() => {
    var url = location.hash;
    if (url.length < 1) {
      url = "#home";
    }
    setActive(url);
    var link = document.getElementsByName(url)[0];
    if (link != undefined) {
      link.click();
    }

    window.addEventListener("hashchange", function () {
      const url = location.hash;
      setActive(url);
      console.log(url);
    });
  }, []);

  return (
    <a
      name={link.url}
      href={link.url}
      className={`  ${active === link.url && "active"} px-3 py-1`}
    >
      {link.title}
    </a>
  );
}

export default NavLink;
