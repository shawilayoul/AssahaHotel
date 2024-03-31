import React from "react";

const CabinTable = () => {
  return (
    <div className="flex flex-col gap-8 p-5">
      <div className="flex  justify-between">
        <h3>All Cabins</h3>
        <p>Filter/Sort</p>
      </div>
      <div className="">
        <table className="flex justify-between">
          <th></th>
          <th>Cabin</th>
          <th>Capacity</th>
          <th>Price</th>
          <th>Discount</th>
          <th></th>
        </table>
      </div>
    </div>
  );
};

export default CabinTable;
