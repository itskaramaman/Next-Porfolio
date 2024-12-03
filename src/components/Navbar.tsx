import { FloatingNav } from "./ui/floating-navbar";
import { navItems } from "@/data/about";

const Navbar = () => {
  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
