import React from "react";
import { useForm } from "react-hook-form";
import { createCabins } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { da } from "date-fns/locale";
const CreateCabinForm = ({ cabinToEdit = {} }) => {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditsession = Boolean(editId);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: isEditsession ? editValues : {},
  });
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
    const image = typeof data.image === "string" ? data.image : data.image[0];
    //console.log(data.image[0].name)
    if(isEditsession){
      mutate({ ...data, image: image ,id: editId});
      reset();
    }else{
      mutate({ ...data, image: image });
      reset();
    }
  
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
          {...register("image", { required: isEditsession ? false : "the field is required" })}
        />
      </div>
      <div>
        <button className="bg-black text-white p-1" disabled={isLoading}>
          {isEditsession ? 'Edit Cabin' : 'Create new cabin'}
        </button>
      </div>
    </form>
  );
};

export default CreateCabinForm;
