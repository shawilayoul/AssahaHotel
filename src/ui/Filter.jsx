import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handelClick = (value) => {
    searchParams.set('discount',value)
    setSearchParams(searchParams)
  };
  return (
    <div className="flex gap-2">
      <button
        className="bg-gray-200 p-1 rounded"
        onClick={() => handelClick("all")}
      >
        All
      </button>
      <button
        className="bg-gray-200 p-1 rounded"
        onClick={() => handelClick("noDiscount")}
      >
        No-discount
      </button>
      <button
        className="bg-gray-200 p-1 rounded"
        onClick={() => handelClick("withDiscount")}
      >
        With-discount
      </button>
    </div>
  );
};

export default Filter;
