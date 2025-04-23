import FlashHeader from "./FlashHeader";
import FlashContainer from "./FlashContainer";
import ButtonRed from "../../../components/ui/ButtonRed"
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const FlashSales = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section className="my-30">
      <FlashHeader containerRef={containerRef}/>
      <FlashContainer containerRef={containerRef} />
      <div className="text-center border-gray-200 border-b-2 pb-20">
      <ButtonRed text={"View All Products"} onClick={()=>navigate(`/products`)} />
      </div>
    </section>
  );
};

export default FlashSales;
