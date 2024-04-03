import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Error loading data from cabins");
  }

  return data;
};

export const createCabins = async (newcabin) => {
  //creating new cabins
  const imageName = `${Math.random()}-${newcabin.image.name}`.replace(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabinsImages/${imageName}`;
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newcabin, image: imagePath }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Error creating data from cabins");
  }
  //uploading an image
  const { error: storageError } = await supabase.storage
    .from("cabinsImage")
    .upload(imageName, newcabin.image);
  //delete the cabins if there is error
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Error cabins image could not be uploaded and the cabins was not created"
    );
  }
  return data;
};
export const deleteCabins = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Error deleting data from cabins");
  }
  return data;
};
