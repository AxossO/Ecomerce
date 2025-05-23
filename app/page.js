import Categories from "./components/Categories";
import Header from "./components/Header";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="">
      <Header className="" />
      <SearchBar />
      <Categories />
      <Slider />
      <Products />
    </div>
  );
}
