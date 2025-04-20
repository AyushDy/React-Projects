import FlashHeader from "./FlashHeader";
import FlashContainer from "./FlashContainer";
import ButtonRed from "../../../components/ui/ButtonRed"

const FlashSales = () => {
  return (
    <section className="my-30">
      <FlashHeader />
      <FlashContainer />
      <div className="text-center border-gray-200 border-b-2 pb-20">
      <ButtonRed text={"View All Products"} />
      </div>
    </section>
  );
};

export default FlashSales;
