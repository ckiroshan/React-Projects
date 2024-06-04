import Input from "../../components/Input";
import "./Category.css";

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="category" />
          <span className="checkmark"></span>All
        </label>
        <Input onChange={handleChange} value="sneakers" title="Sneakers" name="category" />
        <Input onChange={handleChange} value="flats" title="Flats" name="category" />
        <Input onChange={handleChange} value="sandals" title="Sandals" name="category" />
        <Input onChange={handleChange} value="heels" title="Heels" name="category" />
      </div>
    </div>
  );
};

export default Category;
