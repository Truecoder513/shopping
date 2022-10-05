import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Page from "./pages/Page";
import Product from "./pages/Product";
import "./assets/css/default.css";
import "./assets/css/globalElement.css";
import "./assets/css/components/error.css";
import "./assets/css/components/navigation.css";
import "./assets/css/components/banner.css";
import "./assets/css/components/card.css";
import "./assets/css/components/bestManuc.css";
import "./assets/css/components/instagram.css";
import "./assets/css/components/footer.css";
import "./assets/css/components/productDetails.css";
import "./assets/css/components/cart.css";
import "./assets/css/components/buy.css";
import Details from "./pages/Details";
import Navigation from "./pages/components/Navigation";
import Footer from "./pages/components/Footer";
import { useState } from "react";
import Cart from "./pages/Cart";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const location = useLocation();
  const [intoCart, setIntoCart] = useState(
    localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : ""
  );
  const routesWithNav = [
    "/About",
    "/Product",
    "/Details",
    "/Page",
    "/Blog",
    "/Contact",
    "/Cart",
  ];

  function checkPathnameOnRouteWithNav() {
    for (let i = 0; i < routesWithNav.length; i++) {
      if (location.pathname.startsWith(routesWithNav[i])) {
        return true;
      }
    }
    return false;
  }
  return (
    <div className="App">
      {(checkPathnameOnRouteWithNav() || location.pathname === "/") && (
        <Navigation intoCart={intoCart} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/About" element={<About />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Cart"
          element={<Cart intoCart={intoCart} setIntoCart={setIntoCart} />}
        />
        <Route
          path="/Details/:productId"
          element={<Details setIntoCart={setIntoCart} intoCart={intoCart} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {(checkPathnameOnRouteWithNav() || location.pathname === "/") && (
        <div className="to-top">
          <img src={require("./assets/img/up.svg").default} alt="" />
        </div>
      )}
      {(checkPathnameOnRouteWithNav() || location.pathname === "/") && (
        <Footer />
      )}
    </div>
  );
}

export default App;
