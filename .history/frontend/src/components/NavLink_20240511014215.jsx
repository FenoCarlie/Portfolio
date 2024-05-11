import { Link, useParams } from "react-router-dom";

function NavLink({ link }) {
  const pathName = useParams();
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
