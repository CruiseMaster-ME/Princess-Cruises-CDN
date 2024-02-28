import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import ShipDetails from "./Screens/ShipDetails";
import { FloatButton } from "antd";
import AllShips from "./Screens/AllShips";
import AllDestinations from "./Screens/Destinations";
import Contact from "./Screens/Contact";
import HeaderComponent from "./Components/Header";

function App() {
  return (
    <div className="layout-container">
      <HeaderComponent />
      <Routes>
        <Route
          index
          path="/"
          element={<Home/>}
        />
        <Route
          path="/all-destinations"
          element={<AllDestinations/>}
        />
        <Route path="/all-ships" element={<AllShips/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route
          path="/ship-details/:urlName"
          element={<ShipDetails />}
        />
      </Routes>
      <Footer />
      <FloatButton.BackTop type="primary"/> 
    </div>
  );
}

export default App;
