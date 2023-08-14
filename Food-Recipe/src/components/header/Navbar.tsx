import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Component for the navigation bar
const Navbar = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-center py-2 text-[14px]">
        {/* List of navigation links */}
        <ul className="flex justify-between items-center space-x-8 font-semibold">
          <li>
            {/* Link to the home page */}
            <Link to="/">
              <div>Home</div>
            </Link>
          </li>
          <li>
            {/* Placeholder link */}
            <a href="#">Categories</a>
          </li>
          <li>
            {/* Placeholder link */}
            <a href="#">Recipes</a>
          </li>
          <li>
            {/* Placeholder link */}
            <a href="#">Contact</a>
          </li>
          <li>
            {/* Placeholder link */}
            <a href="#">About</a>
          </li>
        </ul>
        <div>
          {/* Social media icons */}
          <div className="hidden icons md:flex justify-end items-center">
            {/* Facebook icon */}
            <a href="#" className="ml-3 hover:cursor-pointer">
              <FaFacebook size={20} color="black" />
            </a>
            {/* Twitter icon */}
            <a href="#">
              <FaTwitter
                size={20}
                color="black"
                className="ml-3 hover:cursor-pointer"
              />
            </a>
            {/* Instagram icon */}
            <a href="#">
              <FaInstagram
                size={20}
                color="black"
                className="ml-3 hover:cursor-pointer"
              />
            </a>
            {/* Pinterest icon */}
            <a href="#">
              <FaPinterest
                size={20}
                color="black"
                className="ml-3 hover:cursor-pointer"
              />
            </a>
            {/* YouTube icon */}
            <a href="#">
              <FaYoutube
                size={20}
                color="black"
                className="ml-3 hover:cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
