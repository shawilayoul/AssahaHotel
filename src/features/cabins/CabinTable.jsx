import React from "react";
import Filter from "../../ui/Filter";
import Select from "../../ui/Select";

const CabinTable = () => {
  return (
    <div className="flex flex-col gap-8 p-5">
      <div className="flex  justify-between">
        <h3>All Cabins</h3>
        <div>
          <Filter />
        </div>
        <div>
          <Select
            options={[
              { value: "name-asc", label: "Sortby name asc(A-Z) " },
              { value: "name-desc", label: "Sortby name asc(Z-A) " },
              { value: "maxCapacity-asc", label: "Sortby capacity asc(low-high) " },
              { value: "maxCapacity-desc", label: "Sortby capacity asc(high-low)) " },
              { value: "regularPrice-asc", label: "Sortby price asc(low-high) " },
              { value: "regularPrice-desc", label: "Sortby price asc(high-low)) " },
            ]}
          />
        </div>
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
