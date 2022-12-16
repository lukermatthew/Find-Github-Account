import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
import Alert from "../components/layout/Alert";

const HomePage = () => {
  return (
    <>
      <Alert />
      <UserSearch />
      <UserResults />
    </>
  );
};

export default HomePage;
