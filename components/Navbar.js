import Link from "next/link";
import Search from "./Search";

import {BsGlobeCentralSouthAsia} from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex">
        <Link 
          href ="/" 
          className="flex items-center flex-shrink-0 text-white mr-6">
            <BsGlobeCentralSouthAsia size={28} color="black" />
            <span className="font-semibold text-xl tracking-tight ml-1">Countries</span>
        </Link>
      </div>
      <Search />
    </nav>
  );
};

export default Navbar;
