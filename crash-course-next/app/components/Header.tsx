import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-5 bg-blue-500">
      {/* <p className="font-bold text-white">I am the header</p> */}
      <Link
        href="/"
        className="py-2 px-3 text-blue-500 bg-white rounded font-semibold"
      >
        Home
      </Link>
    </header>
  );
};

export default Header;
