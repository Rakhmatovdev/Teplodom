import Flickityn from "../components/Flickity";
import RootCategory from "../features/category/RootCategory";
import Brend from "./Brend";
import Komanda from "./Komanda";
import NewProducts from "./NewProducts";
import Popular from "./Popular";
import Premushestva from "./Premushestva";
import Teplodom from "./Teplodom";
const Home = () => {
  return (
    <div className="">
      <Flickityn />
      <RootCategory />
      <NewProducts />
      <Brend />
      <Popular />
      <Premushestva />
      <Komanda />
      <Teplodom />
    </div>
  );
};

export default Home;
