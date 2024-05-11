"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ link }) {
  const pathName = usePathname();
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
