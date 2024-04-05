import React from "react";
import Filter from "../../ui/Filter";

const CabinTable = () => {
  return (
    <div className="flex flex-col gap-8 p-5">
      <div className="flex  justify-between">
        <h3>All Cabins</h3>
        <p>
          <Filter />
        </p>
      </div>
      <table className="flex ">
        <tr className=" flex">
          <th className="border-2 w-32"></th>
          <th className="border-2 w-32">Cabin</th>
          <th className="border-2 w-32">Capacity</th>
          <th className="border-2  w-32">Price</th>
          <th className="border-2  w-32"> Discount</th>
          <th className="border-2 border-r-2 w-32"> </th>
        </tr>
      </table>
    </div>
  );
};

export default CabinTable;
