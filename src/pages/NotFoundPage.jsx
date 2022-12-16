import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="message-box">
                <h1 className="text-6xl font-bold mb-2">Oops</h1>
                <p className="text-1xl mb-1">404 -Page not found!.</p>
                <Link to="/">
                  <button className="btn btn-secondary">back to home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
