import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import React, { useState } from "react";
import toast from "react-hot-toast";
import CreateCabinForm from './CreateCabinForm'
import { deleteCabins } from "../../services/apiCabins";

const CabinRow = ({ cabin }) => {
  const [showForm ,setShowForm] = useState(false)
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
    <>
    <tr className="flex  gap-1 mb-1 w-full border-1">
      <th>
        <img
          style={{
            width: "115px",
            height: "100px",
          }}
          src={image}
          alt="img"
        />
      </th>
      <th className="border-2 p-1 w-32">{name}</th>
      <th className="border-2 p-1 w-32">{maxCapacity}</th>
      <th className="border-2 p-1 w-32">{regularPrice}</th>
      <th className="border-2 p-1 w-32">{discount}</th>
      <th className="border-2 p-1 w-32">
      <div className="flex gap-1">
        <button
          className=" flex items-center bg-black text-white mb-2 h-8 p-2 rounded"
          onClick={() => mutate(cabinId)}
          disabled={isLoading}
        >
          <MdDelete />
        </button>
        <button
          className=" flex items-center bg-black text-white mb-2 h-8 p-2 rounded"
          disabled={isLoading}
          onClick={()=>setShowForm((show)=>!show)}
        >
          <FaEdit />
        </button>
      </div>
      </th>
    </tr>
    {showForm && <CreateCabinForm cabinToEdit ={cabin}/>}
    </>
  );
};

export default CabinRow;
