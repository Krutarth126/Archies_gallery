import { useStateValue } from "./StateProvider";

const SingleCard = ({ url, content, title, price }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        url: url,
        price: price,
        content: content,
      },
    });
  };
  return (
    <div className="card mx-auto my-2" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={url}
        alt="Card image cap"
        height="40vh"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <h6>{price}</h6>
        <button onClick={addToBasket} className="btn btn-primary">
          ADD TO BASKET
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
