import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Detail Page</h1>
      <span>{id}</span>
    </div>
  );
};
export default Detail;
