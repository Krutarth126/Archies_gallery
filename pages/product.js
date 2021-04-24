import Head from "next/head";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import SingleCard from "../component/SingleCard";
import axios from "axios";
import Link from "next/link";

export async function getStaticProps() {
  let res = await axios.get("https://archies-order.herokuapp.com/clothes");
  let snackRes = await axios.get("https://archies-order.herokuapp.com/snacks");
  let poshak = await axios.get("https://archies-order.herokuapp.com/vastra");
  let puja = await axios.get("https://archies-order.herokuapp.com/puja");
  let response = res.data;
  let snackData = snackRes.data;
  let poshakdata = poshak.data;
  let pujaData = puja.data;
  return {
    props: { data: response, snackData, poshakdata, pujaData },
  };
}

const Services = ({ data, snackData, poshakdata, pujaData }) => {
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
        <h1>Clothing & Fashion</h1>
        <div className="row">
          {data.map((data, idx) => {
            return (
              <>
                <div className="col-12 col-sm-3 ">
                  <SingleCard
                    url={data.url}
                    title={data.heading}
                    content={data.content}
                    price={data.price}
                    key={idx}
                  />
                </div>
              </>
            );
          })}
        </div>
        <h1>Hand Made Snacks</h1>
        <div className="row">
          {snackData.map((data, idx) => {
            return (
              <>
                <div className="col-12 col-sm-3 ">
                  <SingleCard
                    url={data.url}
                    title={data.heading}
                    content={data.content}
                    price={data.price}
                    key={idx}
                  />
                </div>
              </>
            );
          })}
        </div>
        <h1>Bhagwan Poshak</h1>
        <div className="row">
          {poshakdata.map((data, idx) => {
            return (
              <>
                <div className="col-12 col-sm-3 ">
                  <SingleCard
                    url={data.url}
                    title={data.heading}
                    content={data.content}
                    price={data.price}
                    key={idx}
                  />
                </div>
              </>
            );
          })}
        </div>
        <h1>Puja Samagri</h1>
        <div className="row">
          {pujaData.map((data, idx) => {
            return (
              <>
                <div className="col-12 col-sm-3 ">
                  <SingleCard
                    url={data.url}
                    title={data.heading}
                    content={data.content}
                    price={data.price}
                    key={idx}
                  />
                </div>
              </>
            );
          })}
        </div>
        <Link href="/order">
          <button className="btn btn-warning w-75 btnnn">
            {" "}
            Go To Checkout Page
          </button>
        </Link>
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

export default Services;
