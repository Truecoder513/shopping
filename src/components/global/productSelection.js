import Products from "../../data/Products";
import { LinkButton, SectionTitle } from "./button";

export function ProductSelection(props) {
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
          <a key={index} href={"/Details/" + product.id}>
            <img src={product.img} alt="" />
            <p className="desc">{product.desc}</p>
            <p className="price">${product.price}</p>
          </a>
        ))}
      </div>
      <LinkButton
        content={props.buttonContent}
        className={props.buttonClassName}
      />
    </div>
  );
}
