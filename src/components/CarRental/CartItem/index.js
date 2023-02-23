const CartItem = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
      <div className="d-flex flex-row">
        <img className="rounded" src={props.item.image} width="50" />
        <div className="ms-2">
          <span className="font-weight-bold d-block">{props.item.name}</span>
          <span className="spec">{props.item.description}</span>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center">
        <span>
          <i
            className="bx bx-minus d-block me-1 text-black-50"
            onClick={() => props.removeItem(props.item)}
          ></i>
        </span>
        <span className="d-block">{props.item.count}</span>

        <span>
          <i
            className="bx bx-plus d-block text-black-50"
            onClick={() => props.addItem(props.item)}
          ></i>
        </span>
        <span className="d-block ms-5 font-weight-bold">
          ${props.item.price}
        </span>
        <i
          className="bx bx-trash ms-3 text-black-50"
          onClick={() => props.clearItem(props.item)}
        ></i>
      </div>
    </div>
  );
};

export default CartItem;
