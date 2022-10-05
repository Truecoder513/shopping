import { Link } from "react-router-dom";
import Products from "../../data/Products";
import { LinkButton, SectionTitle, SimpleButton } from "./button";

export function ProductSelection(props) {
  function speedAdd(e, index) {
    e.preventDefault();
  }
  const filtered = Products.filter(
    (product) => product.type === props.selection
  );
  return (
    <div>
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
              onClick={(e) => speedAdd(e, index)}
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
