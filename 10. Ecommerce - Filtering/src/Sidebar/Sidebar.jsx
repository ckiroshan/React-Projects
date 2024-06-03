import { GiRunningShoe } from "react-icons/gi";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1><GiRunningShoe /> Shoe Mart</h1>
      </div>
      <Category />
      <Price />
      <Colors />
    </section>
  );
};

export default Sidebar;
