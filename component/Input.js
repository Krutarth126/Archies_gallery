import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const Input = () => {
  let router = useRouter();
  const [state, setState] = useState({
    heading: "",
    content: "",
    url: "",
    price: "",
    category: "",
  });

  const handleclick = (e) => {
    setState((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };

  const submit = async (e) => {
    await axios.post("https://archies-order.herokuapp.com/post", state);
    e.preventDefault();

    router.push("/services");
  };
  console.log(state);
  return (
    <div>
      <form className="w-75 m-auto">
        <div className="form-group ">
          <label htmlFor="heading">Heading</label>
          <input
            type="text"
            className="form-control"
            id="heading"
            placeholder="Input Heading"
            name="heading"
            value={state.heading}
            onChange={handleclick}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <input
            type="text"
            className="form-control"
            id="content"
            placeholder="Input Content"
            name="content"
            value={state.content}
            onChange={handleclick}
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">Url</label>
          <input
            type="text"
            className="form-control"
            id="url"
            placeholder="Input Image Url"
            name="url"
            value={state.url}
            onChange={handleclick}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Input Image Url"
            name="price"
            value={state.price}
            onChange={handleclick}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder="Input Category"
            name="category"
            value={state.category}
            onChange={handleclick}
          />
        </div>
      </form>
      <div className="w-75 m-auto mt-3">
        <button onClick={submit} className="btn btn-success w-100 m-auto">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Input;
