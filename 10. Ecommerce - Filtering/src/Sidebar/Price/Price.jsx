import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="price" />
        <span className="checkmark"></span>All
      </label>
      <Input onChange={handleChange} value={50} title="$0 - 50" name="price" />
      <Input onChange={handleChange} value={100} title="$50 - 100" name="price" />
      <Input onChange={handleChange} value={150} title="$100 - 150" name="price" />
      <Input onChange={handleChange} value={200} title="$150 +" name="price" />
    </div>
  );
};

export default Price;
