import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { GithubContext } from "../../context/github/githubContext";

const Navbar = ({ title }) => {
  const { users, loading } = useContext(GithubContext);

  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2='true' mx-2='true' ">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold">
            {title}
          </Link>
        </div>
        <div className="flex-1" px-2="true" mx-2="true">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "What is your Github?",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
