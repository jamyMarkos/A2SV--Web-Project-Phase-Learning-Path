import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";
import Home from "../pages/Home";
import RecipeDetails from "../pages/RecipeDetails";

// Component for the overall layout structure
const Layout = () => {
  return (
    <>
      <Header /> {/* Displaying the header */}
      <div className="content">
        <Outlet /> {/* Rendering the nested routes */}
      </div>
      <Footer /> {/* Displaying the footer */}
    </>
  );
};

// Component to define the browser routes using React Router
const BrowserRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Defining the main layout for the entire app */}
        <Route path="/" element={<Layout />}>
          {/* Defining the home page route */}
          <Route path="/" element={<Home />} />
          {/* Defining the recipe details page route */}
          <Route path="/details/:id" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BrowserRoutes;
