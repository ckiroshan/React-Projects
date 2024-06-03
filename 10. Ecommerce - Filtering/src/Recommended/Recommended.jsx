import "./Recommended.css";

function Recommended() {
  return (
    <div>
      <h2 className="recommended-title">Recommended Products</h2>
      <div className="recommended-flex">
        <button className="btn btn-round">Adidas</button>
        <button className="btn btn-round">Nike</button>
        <button className="btn btn-round">Puma</button>
        <button className="btn btn-round">Vans</button>
        <button className="btn btn-round">All Products</button>
      </div>
    </div>
  );
}

export default Recommended