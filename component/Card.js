import { motion } from "framer-motion";
import Link from "next/link";

const Cards = () => {
  return (
    <>
      <motion.h2
        style={{ color: "blue", fontFamily: "cursive" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        What You Get Here
      </motion.h2>
      <div className="row " style={{ width: "100%", margin: "auto" }}>
        <div className="card col-12 col-sm-2 m-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://i.ibb.co/StB7fZB/Whats-App-Image-2021-04-17-at-22-34-34-Copy.jpg"
            alt="Card image cap"
            height="40vh"
          />
          <div className="card-body">
            <h5 className="card-title">Ladies Dresses</h5>
            <p className="card-text h-50">
              We have varities of traditional dresses. We offer customised
              stiching as per yor need....
            </p>
            <Link href="/product">
              <a href="#" className="btn btn-primary">
                Order Now
              </a>
            </Link>
          </div>
        </div>
        <div className="card  col-12 col-sm-2 m-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://i.ibb.co/TrWHh65/Whats-App-Image-2021-04-17-at-22-35-13.jpg"
            alt="Card image cap"
            height="40vh"
          />
          <div className="card-body">
            <h5 className="card-title">Hand Made Snacks</h5>
            <p className="card-text h-50">
              We make tasty home made snacks like namkin, chiwda, saloni, gujiya
              and many more....
            </p>
            <Link href="/product">
              <a href="#" className="btn btn-primary m-1">
                Order Now
              </a>
            </Link>
          </div>
        </div>
        <div className="card  col-12 col-sm-2 m-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://i.ibb.co/qCtvNhk/Whats-App-Image-2021-04-17-at-22-35-36.jpg"
            alt="Card image cap"
            height="40vh"
          />
          <div className="card-body">
            <h5 className="card-title">Bhagwan Poshak</h5>
            <p className="card-text h-50">
              We have varities of Bhagwan Vastra like this and many more...
            </p>
            <Link href="/product">
              <a href="#" className="btn btn-primary">
                Order Now
              </a>
            </Link>
          </div>
        </div>
        <div className="card  col-12 col-sm-2 m-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://akm-img-a-in.tosshub.com/aajtak/images/story/201612/pujansamgri_146320921580_1024x1024_051416123130_1482493489_749x421.jpeg?size=1200:675"
            alt="Card image cap"
            height="40vh"
          />
          <div className="card-body">
            <h5 className="card-title">Pujan Samagri</h5>
            <p className="card-text h-50">
              We have all the puja samagri that you require in daily
              household...
            </p>
            <Link href="/product">
              <a href="#" className="btn btn-primary">
                Order Now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
