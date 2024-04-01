import React from "react";
import { useForm } from "react-hook-form";
import { createCabins } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const CreateCabinForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: createCabins,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
  });
  const handleData = (data) => {
    mutate(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(handleData)}
      className="flex flex-col gap-4 mt-4 p-5"
    >
      <div>
        <label htmlFor="name">name</label>
        <input type="text" id="name" {...register("name")} />
      </div>
      <div>
        <label htmlFor="max">Max Capacity</label>
        <input type="number" id="max" {...register("maxCapacity")} />
      </div>
      <div>
        <label htmlFor="name">Regular Price</label>
        <input type="number" id="name" {...register("regularPrice")} />
      </div>
      <div>
        <label htmlFor="name">Discount</label>
        <input type="number" id="name" {...register("discount")} />
      </div>
      <div>
        <label htmlFor="name">Image</label>
        <input type="file" id="name" />
      </div>
      <div>
        <button className="bg-black text-white p-1">Add new cabin</button>
      </div>
    </form>
  );
};

export default CreateCabinForm;
