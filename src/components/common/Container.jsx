import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" max-w-container mx-auto px-2 xl:px-0">{children}</div>
  );
};

export default Container;
