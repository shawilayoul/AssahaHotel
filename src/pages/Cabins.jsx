import { deleteCabins, getCabins } from "../services/apiCabins";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CabinTable from "../features/cabins/CabinTable";
import toast from "react-hot-toast";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useState } from "react";

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);
  const cabins = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  // Mutations
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: (id) => deleteCabins(id),
    onSuccess: () => {
      // Invalidate and refetch
      toast.success("cabin has been deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <div className="">
      <CabinTable />
      <ul className="p-5 border-1">
        {cabins.data?.map(
          ({
            id: cabinId,
            image,
            name,
            maxCapacity,
            regularPrice,
            discount,
            description,
          }) => {
            return (
              <div className="flex justify-between gap-5 border-y-1">
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    marginBottom: "10px",
                  }}
                  src={image}
                  alt=""
                />
                <h3>{name}</h3>
                <h3>{maxCapacity}</h3>
                <h3>{regularPrice}</h3>
                <h3>{discount}</h3>
                <button
                  className=" bg-black text-white mb-2 h-8 p-2 rounded"
                  disabled={isLoading}
                  onClick={() => mutate(cabinId)}
                >
                  delete
                </button>
              </div>
            );
          }
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
