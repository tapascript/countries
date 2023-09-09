import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <Link 
        href ="/" 
        class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Countries</span>
      </Link>
      <Search />
    </nav>
  );
};

export default Navbar;
