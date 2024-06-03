import { GiRunningShoe } from "react-icons/gi";
import Category from "./Category/Category";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1><GiRunningShoe /> Shoe Mart</h1>
      </div>
      <Category />
    </section>
  );
};

export default Sidebar;
