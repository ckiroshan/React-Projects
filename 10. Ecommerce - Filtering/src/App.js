import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";

// Database
import products from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // ---------- Search Input Filter ----------
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) => {
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1);
  });

  // ---------- Radio Filter ----------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // ---------- Button Filter ----------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => category === selected || color === selected || company === selected || newPrice === selected || title === selected);
    }

    return filteredProducts.map(({ img, title, star, reviews, newPrice, PrevPrice }) => <Card key={Math.random()} img={img} title={title} star={star} reviews={reviews} newPrice={newPrice} PrevPrice={PrevPrice} />);
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
