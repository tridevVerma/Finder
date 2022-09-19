import React from "react";
import { Puff } from "react-loader-spinner";

const Loader = () => {
  return (
    <Puff
      height="550"
      width="120"
      radisu={2}
      color="#00BFFF"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass="flex justify-center items-center"
      visible={true}
    />
  );
};

export default Loader;
