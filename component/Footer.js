import Link from "next/link";
const Footer = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "black", color: "white" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Archie's Collection
      </h1>
      <div className="d-flex justify-content-around my-4 yashh">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/product">
          <a>Product</a>
        </Link>
        <Link href="/order">
          <a>Orders</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
      <h2 style={{ color: "white", textAlign: "center" }}>
        Copyright Archies Collection @2021
      </h2>
    </div>
  );
};

export default Footer;
