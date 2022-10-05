import { NavLink } from "react-router-dom";

export function Menu() {
  return (
    <ul>
      {[
        { route: "/", name: "home" },
        { route: "/Product", name: "Product" },
        { route: "/About", name: "About" },
        { route: "/Page", name: "Page" },
        { route: "/Blog", name: "Blog" },
        { route: "/Contact", name: "Contact" },
      ].map((item, index) => (
        <NavLink to={item.route} key={index}>
          <li>{item.name}</li>
        </NavLink>
      ))}
    </ul>
  );
}
