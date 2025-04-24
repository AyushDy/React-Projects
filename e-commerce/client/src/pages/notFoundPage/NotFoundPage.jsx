import React from "react";
import ButtonRed from "../../components/ui/ButtonRed";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div  className="flex flex-col items-center justify-center text-center mx-30 my-30 gap-10">
      <h1 className="text-8xl font-bold">404 Not Found</h1>
      <p>The page you visited does not exist. You may proceed to Homepage.</p>
      <Link to={"/"}>
        <ButtonRed text={"Back To Homepage"} />
      </Link>
    </div>
  );
};

export default NotFoundPage;
