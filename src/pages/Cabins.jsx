import { getCabins } from "../services/apiCabins";
import { useQuery} from "@tanstack/react-query";
import CabinTable from "../features/cabins/CabinTable";

import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useState } from "react";
import CabinRow from "../features/cabins/CabinRow";

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);
  const cabins = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
 

  return (
    <div className="">
      <CabinTable />
      <ul className="p-5 border-1">
        {cabins.data?.map(
          ( cabin) =>  <div key={cabin.id}><CabinRow cabin={cabin}/></div>
        )}
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
