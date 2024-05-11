import { useEffect, useState } from "react";

function NavLink({ link }) {
  const [active, setActive] = useState();
  useEffect(() => {
    var url = location.hash;
    if (url.length < 1) {
      url = "#home";
    }
    setActive(url);

    window.addEventListener("hashchange", function () {
      const url = location.hash;
      setActive(url);
      console.log(url);
    });

    //<Navigate to="/home" />
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
