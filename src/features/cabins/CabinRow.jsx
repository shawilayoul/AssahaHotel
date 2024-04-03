import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { deleteCabins } from "../../services/apiCabins";

const CabinRow = ({ cabin }) => {
  const {
    id: cabinId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;

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
        className=" flex items-center bg-black text-white mb-2 h-8 p-2 rounded"
        onClick={() => mutate(cabinId)}
      >
        delete
      </button>
    </div>
  );
};

export default CabinRow;
