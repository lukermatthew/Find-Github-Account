import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AboutPage = () => {
  return (
    <>
      <h1 className="text-6xl mb-4 text-primary ">Search for github</h1>
      <p className="mb-4 text-2xl font-light">
        A React App project that consume the
        <strong className="mx-1 text-secondary">
          <a
            href="https://docs.github.com/en/rest?apiVersion=2022-11-28"
            target="_blank"
          >
            Github API
          </a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
    </>
  );
};

export default AboutPage;
