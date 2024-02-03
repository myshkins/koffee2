const ProductCard = (props) => {
  let positions = {0: "zero", 1: "one", 2: "two"}
  let cardStatus = ""

  if (props.index == null) {
    cardStatus = "";
  } else if (props.index < props.activeIndices[0]) {
    cardStatus = "left";
  } else if (props.index > props.activeIndices[props.activeIndices.length - 1]) {
    cardStatus = "right";
  } else {
    const ind = props.activeIndices.findIndex(element => element === props.index)
    cardStatus = `${positions[ind]}`
  }

  return (
    <li className={`product-card ${cardStatus}`}>
      <div className="product-card-wrap">
        <h4>{props.title}</h4>
        <h5>{props.subtitle}</h5>
        <img src={props.img} />
      </div>
    </li>
  );
};

export default ProductCard;
