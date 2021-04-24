import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import OrderProduct from "../component/OrderProduct";
import { useStateValue } from "../component/StateProvider";
import { useRouter } from "next/router";

const Order = () => {
  const [state, dispatch] = useStateValue();
  const router = useRouter();
  const [input, setInput] = useState({
    name: "",
    phoneNum: "",
    address: "",
    state,
  });
  console.log(input);

  const emptybasket = () => {
    return (
      <div className="empty__div">
        <h1 className="emptybaket__msg">
          Oppss 😵 Your Basket is Empty....Please add something in your basket
          to order
        </h1>
      </div>
    );
  };

  const data = () => {
    const handleclick = (e) => {
      setInput((input) => {
        return {
          ...input,
          [e.target.name]: e.target.value,
        };
      });
    };
    const submit = async (e) => {
      await axios.post("https://archies-user.herokuapp.com/user/post", input);
      alert("order placed");
      e.preventDefault();

      await setTimeout(() => {
        router.reload();
      }, 1000);
    };
    return (
      <>
        <div>
          {state.basket.map((data, idx) => {
            return (
              <OrderProduct
                key={idx}
                url={data.url}
                content={data.content}
                heading={data.title}
                price={data.price}
              />
            );
          })}
        </div>
        <div>
          <form className="w-75 m-auto mb-0">
            <div className="form-group ">
              <label htmlFor="name">Customer Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Name"
                name="name"
                value={input.name}
                onChange={handleclick}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNum">Phone No.</label>
              <input
                type="text"
                className="form-control"
                id="phoneNum"
                placeholder="Enter Your Contact No."
                name="phoneNum"
                value={input.phoneNum}
                onChange={handleclick}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter Your Address"
                name="address"
                value={input.address}
                onChange={handleclick}
              />
            </div>
          </form>
          <div className="w-75 m-auto mt-3">
            <button onClick={submit} className="btn btn-success w-100 m-auto">
              Confirm order
            </button>
          </div>
        </div>
      </>
    );
  };
  console.log(input);
  return (
    <>
      <Head>
        <title>Archie's Collection</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        <link
          rel="icon"
          href="https://i.ibb.co/cyb7zKz/Archie-s-Collection-logos-white.png"
        />
      </Head>
      <Navbar />
      <div className="slider__div" style={{ minHeight: "80vh" }}>
        {state.basket.length === 0 ? emptybasket() : data()}
      </div>

      <Footer />
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Order;
