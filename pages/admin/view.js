import axios from "axios";
import Head from "next/head";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  let res = await axios.get("https://archies-order.herokuapp.com/");
  let data = res.data.reverse();
  return {
    props: { data },
  };
};

const View = ({ data }) => {
  let router = useRouter();
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
      <div>
        {data.map((data) => {
          const id = data._id;
          const deleteFun = async () => {
            await axios.delete(
              `https://archies-order.herokuapp.com/delete/${id}`
            );
            setTimeout(() => {
              router.reload();
            }, 500);
          };
          return (
            <>
              <div className=" order ">
                <div className="order__img">
                  <img src={data.url} height="120vh" alt="image here" />
                </div>
                <div className="order__content">
                  <h4>{data.heading}</h4>
                  <p>{data.content}</p>
                  <h5>{data.price}</h5>
                </div>
                <button
                  className="btn btn-danger btn-sm h-25 "
                  onClick={() => deleteFun()}
                >
                  Delete this item
                </button>
              </div>
            </>
          );
        })}
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

export default View;
