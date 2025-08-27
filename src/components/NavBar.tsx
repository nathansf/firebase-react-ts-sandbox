import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Debounce example", href: "/debounce" },
    { label: "Memo example", href: "/memo" },
    { label: "Github embed", href: "/embed" },
  ];

  return (
    <nav className="w-full border-b border-gray-200">
      <div className="mx-auto max-w-screen-lg px-6">
        <ul className="flex justify-center items-center gap-8 text-lg font-medium py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `relative transition-colors duration-200
               after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:transition-all after:duration-300
               ${
                 isActive
                   ? "text-violet-600 after:w-full after:bg-violet-600"
                   : "text-gray-700 hover:text-gray-900 after:w-0 hover:after:w-full hover:after:bg-violet-600"
               }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
