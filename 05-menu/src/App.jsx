import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import { useState } from "react";
import Category from "./Category";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];
const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };
  return (
    <div className="menu">
      <Title text="Our Menu" />
      <Category categories={categories} filterItems={filterItems} />
      <Menu menu={menu} />
    </div>
  );
};
export default App;
