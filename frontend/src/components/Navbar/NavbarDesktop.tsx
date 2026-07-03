import { NavLink } from "react-router";
import type { NavbarItem } from "../../types/navigation.type";

type NavbarDesktopProp = {
  navbarItems: NavbarItem[]
}

const NavbarDesktop = ({navbarItems}:NavbarDesktopProp) => {
  return (
    <nav className="w-full bg-amber-200 grid grid-cols-3 items-center px-6 py-4">
      {/* Left menu */}
      <div className="flex items-center gap-4 justify-start">
        {navbarItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold"
                : "text-gray-700 hover:text-red-500"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Logo center */}
      <div className="flex justify-center">
        <NavLink to="/" className="font-heading text-2xl font-bold">
          LOGO
        </NavLink>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-4 justify-end">
        <NavLink to="/login">Đăng nhập</NavLink>
        <NavLink to="/cart">Giỏ hàng</NavLink>
      </div>
    </nav>
  );
};

export default NavbarDesktop;