import { navbarItems } from "../../config/navmenuConfig"
import NavbarDesktop from "./NavbarDesktop"

const Navbar = () => {
  return (
    <header className="w-full">
        <div className="hidden lg:block">
            <NavbarDesktop navbarItems={navbarItems} />
        </div>
    </header>
  )
}

export default Navbar