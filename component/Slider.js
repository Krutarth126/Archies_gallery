import { motion } from "framer-motion";

const Slider = () => {
  return (
    <>
      <motion.h1
        style={{ color: "blue", fontFamily: "cursive" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        Welcome To <b>Archies Gallery</b>
      </motion.h1>

      <div
        id="carouselExampleControls"
        className="carousel slide yoyo "
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img
              className="d-block"
              src="https://images-na.ssl-images-amazon.com/images/I/61Aur9ErUTL._UX569_.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item active">
            <img
              className="d-block "
              src="https://wholesalemantra.com/images/Products/Big1/Designer-Indian-Kurtis-Catalog-Supplier-In-Mumbai-Buy-Girls-Kurti-At-Cheap-Prices-WSM-1301_5.jpeg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src="https://i.ibb.co/StB7fZB/Whats-App-Image-2021-04-17-at-22-34-34-Copy.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src="https://i.ibb.co/Sm1NDw1/Whats-App-Image-2021-04-17-at-22-34-35-Copy.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src="https://i.ibb.co/x70fTdp/Whats-App-Image-2021-04-17-at-22-34-36-1.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src="https://i.ibb.co/V93G7Lw/Whats-App-Image-2021-04-17-at-22-34-36-2.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src="https://i.ibb.co/r6BnFgM/Whats-App-Image-2021-04-17-at-22-34-36.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src="https://i.ibb.co/ynLwK8m/Whats-App-Image-2021-04-17-at-22-35-12-1.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src="https://i.ibb.co/dW8ZtdS/Whats-App-Image-2021-04-17-at-22-35-12.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src="https://i.ibb.co/z5XNGFC/Whats-App-Image-2021-04-17-at-22-35-13-1.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src="https://i.ibb.co/TrWHh65/Whats-App-Image-2021-04-17-at-22-35-13.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src="https://i.ibb.co/Wy8KT87/Whats-App-Image-2021-04-17-at-22-35-35.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block "
              src="https://i.ibb.co/qCtvNhk/Whats-App-Image-2021-04-17-at-22-35-36.jpg"
              alt="Second slide"
            />
          </div>

          <div className="carousel-item">
            <img
              className="d-block"
              src="https://5.imimg.com/data5/AS/GW/MY-30985474/girls-kurti-500x500.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Slider;
