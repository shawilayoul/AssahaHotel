import { getCabins } from "../services/apiCabins";
import { useQuery } from "@tanstack/react-query";
import CabinTable from "../features/cabins/CabinTable";

import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useState } from "react";
import CabinRow from "../features/cabins/CabinRow";
import { useSearchParams } from "react-router-dom";

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchParams] = useSearchParams();
  const cabins = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  //fitering
  const filterValue = searchParams.get("discount") || "all";
  let filterCabins;
  if (filterValue === "all") filterCabins = cabins.data;
  if (filterValue === "noDiscount")
    filterCabins = cabins.data.filter((cabin) => cabin.discount == 0);
  if (filterValue === "withDiscount")
    filterCabins = cabins.data.filter((cabin) => cabin.discount > 0);
  //sortby section
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortByCabins = filterCabins?.sort((a,b)=>(a[field] - b[field]) * modifier)

  return (
    <div className="">
      <CabinTable />
      <ul className="p-5 border-1">
        {sortByCabins?.map((cabin) => (
          <div key={cabin.id}>
            <CabinRow cabin={cabin} />
          </div>
        ))}
      </ul>
      <button
        className="bg-black text-white m-5 p-1 w-22"
        onClick={() => setShowForm(!showForm)}
      >
        Add new Cabin
      </button>
      {showForm && <CreateCabinForm />}
    </div>
  );
};

export default Cabins;
