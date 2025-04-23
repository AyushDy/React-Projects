import Timer from "./Timer";
import TopHeader from "../../../components/ui/TopHeader";
import LeftRightButtons from "../../../components/ui/LeftRightButtons";

const FlashHeader = ({containerRef}) => {
  return (
    <>
      <TopHeader title={"Today's"} />
      <div className="flex items-end w-full">
        <h1 className="text-4xl font-bold ">Flash Sales</h1>
        <Timer />
        <LeftRightButtons containerRef={containerRef} />
      </div>
    </>
  );
};

export default FlashHeader;
