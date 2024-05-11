import { Link, useLocation } from "react-router-dom";

function NavLink({ link }) {
  const pathName = useLocation();
  return (
    <Link
      className={` ${
        pathName === link.url && "bg-yellowClaire text-black rounded"
      } px-3 py-1`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}

export default NavLink;
