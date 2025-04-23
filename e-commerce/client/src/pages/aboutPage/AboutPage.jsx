import React from "react";
import BottomInfoCard from "../../components/ui/BottomInfoCard";
import BottomInfo from "../../components/sections/BottomInfo";

const AboutPage = () => {
  return (
    <div className="my-20">
      <div className="ml-25 flex">
        <div className="w-1/2 p-20 flex flex-col justify-center">
          <h1 className="text-5xl font-medium tracking-wide my-10">Our Story</h1>
          <p className="tracking-wide text-lg">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
            <p className="my-6">
              {" "}
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </p>
        </div>
        <div className="w-1/2">
          <img src="/about/shopping.png" alt="" />
        </div>
      </div>
      <div className="mx-35 my-30">
        <div className="flex justify-evenly">
            <BottomInfoCard img={"/about/sellers.svg"} head={"10.5k"} text={"Sellers active on our site."} />
            <BottomInfoCard img={"/about/customers.svg"} head={"45.5k"} text={"Customers active on our site."} />
            <BottomInfoCard img={"/about/annual-gross.svg"} head={"25k"} text={"Annual gross sale on our site"} />
        </div>
        <div className="my-30">
          <BottomInfo />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
