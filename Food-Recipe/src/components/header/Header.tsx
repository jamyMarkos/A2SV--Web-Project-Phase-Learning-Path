import Search from "./Search";
import Navbar from "./Navbar";
import SubscribeForm from "./SubscribeForm";

const Header = () => {
  return (
    <div className="">
      <SubscribeForm />
      <Search />
      <Navbar />
    </div>
  );
};

export default Header;
