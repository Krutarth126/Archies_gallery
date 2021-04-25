import { useStateValue } from "./StateProvider";

const OrderProduct = ({ url, price, heading, content }) => {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      url: url,
    });
  };

  return (
    <div>
      <div className=" order ">
        <div className="order__img">
          <img src={url} alt="image here" height="120vh" />
        </div>
        <div className="order__content">
          <h4>{heading}</h4>
          <p>{content}</p>
          <h5>{price}</h5>
        </div>
        <button
          className="btn btn-danger btn-sm h-25 "
          onClick={removeFromBasket}
        >
          {" "}
          REMOVE FROM BASKET
        </button>
      </div>
    </div>
  );
};

export default OrderProduct;
