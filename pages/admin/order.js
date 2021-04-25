import axios from "axios";
import Head from "next/head";

export const getServerSideProps = async () => {
  let res = await axios.get("https://archies-user.herokuapp.com/");
  let data = res.data.reverse();
  return {
    props: { data },
  };
};

const AmdinOrder = ({ data }) => {
  const orderData = () => {
    return (
      <div className="slider__div">
        {data.map((data, idx) => {
          return (
            <div className="admin__order">
              <h5>order no: {idx + 1}</h5>
              <h5>{data.name}</h5>
              <h5>{data.phoneNum}</h5>
              <p>{data.address}</p>
              <h5>Order Placed</h5>
              <div className="row">
                {data.state.basket.map((order) => {
                  return (
                    <>
                      <div className="col-12 col-sm-4 cardd ">
                        <h6>{order.title}</h6>
                        <div>
                          <img src={order.url} height="150vh" alt="img here" />
                        </div>
                        <p>{order.content}</p>
                        <p id="price">{order.price}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const noData = () => {
    return <h1>No order Placed Yet</h1>;
  };
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

      <div>{data ? orderData() : noData()}</div>
    </>
  );
};

export default AmdinOrder;
