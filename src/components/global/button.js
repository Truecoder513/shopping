import { Link } from "react-router-dom";

export function SimpleButton(props) {
  return (
    <button className={props.className} {...props} disabled={props.disableCond}>
      {props.content}
    </button>
  );
}
export function LinkButton(props) {
  return (
    <Link to={props.link} {...props}>
      <span>{props.content}</span>
    </Link>
  );
}

export function SectionTitle(props) {
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <p>{props.info}</p>
    </div>
  );
}
