import { NavLink } from "react-router-dom";

export function Menu(props) {
  const { setReveal, reveal } = props;
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
        <NavLink to={item.route} key={index} onClick={() => setReveal(!reveal)}>
          <li>{item.name}</li>
        </NavLink>
      ))}
    </ul>
  );
}
