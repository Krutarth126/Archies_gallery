import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 navv ">
        <Link href="/">
          <a className="navbar-brand" href="#">
            <img
              src="https://st2.depositphotos.com/4398873/7993/v/600/depositphotos_79933844-stock-illustration-a-and-c-letters-logo.jpg"
              width="50px"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav  ml-auto ">
            <Link href="/">
              <li>
                <a className="nav-link">Home</a>
              </li>
            </Link>
            <Link href="/about">
              <li>
                <a className="nav-link">About Us</a>
              </li>
            </Link>
            <Link href="/product">
              <li>
                <a className="nav-link">Product</a>
              </li>
            </Link>
            <Link href="/order">
              <li>
                <a className="nav-link">Order</a>
              </li>
            </Link>
            <Link href="/contact">
              <li>
                <a className="nav-link">Contact</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
