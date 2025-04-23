import CategoryList from "../../components/sections/CategoryList";
import Carousel from "../../components/sections/Carousel";
import FlashSales from "./flashSales/FlashSales";
import BrowseCategories from "./BrowseCategories/BrowseCategories";
import BestSelling from "./bestSelling/BestSelling";
import ExploreProducts from "./exploreProducts/ExploreProducts";
import NewArrival from "./newArrival/NewArrival";
import BottomInfo from "../../components/sections/BottomInfo";

const HomePage = () => {

  
  return (
    <div className="mx-10 lg:mx-25">
      <div className="md:flex w-full items-center justify-evenly">
        <CategoryList />
        <Carousel />
      </div>
      <FlashSales />
      <BrowseCategories />
      <BestSelling />

      <div>
        <img src="speaker.png" alt="Buy Speaker" />
      </div>

      <ExploreProducts />
      <NewArrival />
      <BottomInfo />
    </div>
  );
};

export default HomePage;
