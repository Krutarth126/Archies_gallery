import { useStateValue } from "./StateProvider";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const SingleCard = ({ url, content, title, price }) => {
  const [state, dispatch] = useStateValue();

  const createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success(
            "Successfully ",
            "Product Added to cart ",
            3000
          );
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
      }
    };
  };

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
    <>
      <NotificationContainer />
      <div
        className="card mx-auto my-2"
        style={{ width: "18rem", minHeight: "75vh" }}
        onClick={createNotification("success")}
      >
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
          <button
            onClick={() => {
              addToBasket();
            }}
            className="btn btn-primary"
          >
            ADD TO BASKET
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
