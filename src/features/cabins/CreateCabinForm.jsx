import React from "react";
import { useForm } from "react-hook-form";
import { createCabins } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
const CreateCabinForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: createCabins,
    onSuccess: () => {
      toast.success("cabin has been created successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
  const handleData = (data) => {
    //console.log(data.image[0].name)
    mutate({ ...data, image: data.image[0] });
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(handleData)}
      className=" bg-slate-200 flex flex-col items-center justify-center gap-4 mt-4 p-5  shadow-lg"
    >
      <div>
        <p>name</p>
        <input
          type="text"
          id="name"
          placeholder="Cabins name"
          {...register("name", { required: "the field is required" })}
        />
      </div>
      <div>
        <p>Max Capacity</p>
        <input
          type="number"
          id="maxCapacit"
          {...register("maxCapacity", {
            required: "the field is required",
            min: 1,
            max: 20,
          })}
        />
      </div>
      <div>
        <p>Regular Price</p>
        <input
          type="number"
          id="regularPrice"
          {...register("regularPrice", { required: "the field is required" })}
        />
      </div>
      <div>
        <p>Discount</p>
        <input
          type="number"
          defaultValue={0}
          id="discount"
          {...register("discount", { required: "the field is required" })}
        />
      </div>
      <div>
        <p>Image</p>
        <input
          type="file"
          id="image"
          {...register("image", { required: "the field is required" })}
        />
      </div>
      <div>
        <button className="bg-black text-white p-1" disabled={isLoading}>
          Add new cabin
        </button>
      </div>
    </form>
  );
};

export default CreateCabinForm;
