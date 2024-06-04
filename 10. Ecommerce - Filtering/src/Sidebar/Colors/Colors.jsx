import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="color" />
        <span className="checkmark all"></span>All
      </label>
      <Input onChange={handleChange} value="black" title="Black" color="black" name="color" />
      <Input onChange={handleChange} value="blue" title="Blue" color="blue" name="color" />
      <Input onChange={handleChange} value="red" title="Red" color="red" name="color" />
      <Input onChange={handleChange} value="green" title="Green" color="green" name="color" />
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="white" name="color" />
        <span className="checkmark" style={{ background: "white", border: "2px solid black" }}></span>White
      </label>
    </div>
  );
};

export default Colors;
