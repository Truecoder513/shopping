import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Products from "../../data/Products";
import { LinkButton, SectionTitle, SimpleButton } from "./button";

export function ProductSelection(props) {
  const { intoCart, setIntoCart } = props;
  function speedAdd(e, product) {
    e.preventDefault();

    const copy = [...intoCart];
    const filtered = copy.findIndex((el) => el.id === product.id);

    if (filtered >= 0) {
      copy[filtered].quantity = copy[filtered].quantity + 1;
      toast.success("Added one more quantity for this item");
      localStorage.setItem("Cart", JSON.stringify(copy));
      setIntoCart(copy);
    } else {
      const newProductToAdd = product;
      newProductToAdd.quantity = 1;
      copy.push(newProductToAdd);
      toast.success("Added to cart");
      localStorage.setItem("Cart", JSON.stringify(copy));
      setIntoCart(copy);
    }
  }
  const filtered = Products.filter(
    (product) => product.type === props.selection
  );
  return (
    <div>
      <ToastContainer />
      <SectionTitle
        title={props.title}
        info={props.info}
        className={props.sectionClassName}
      />
      <div className="product-container selection">
        {filtered.map((product, index) => (
          <Link key={index} href={"/Details/" + product.id}>
            <img src={product.img} alt="" />
            <p className="desc">{product.desc}</p>
            <p className="price">${product.price}</p>
            <SimpleButton
              className="add-to-cart"
              content="Add-to cart"
              onClick={(e) => speedAdd(e, product)}
            />
          </Link>
        ))}
      </div>
      <LinkButton
        content={props.buttonContent}
        className={props.buttonClassName}
      />
    </div>
  );
}
