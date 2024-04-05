import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Error loading data from cabins");
  }

  return data;
};

export const createCabins = async (newcabin, id) => {
  //creating new cabins
  const hasimagePath = newcabin.image?.startWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newcabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasimagePath
    ? newcabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabinsImages/${imageName}`;

  //create cabin
  // 1. Create/edit cabin
  let query = supabase.from("cabins");

  if (!id) query = query.insert([{ ...newcabin, image: imagePath }]);
  if (id) query = query.update({ ...newcabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
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

// delete  a cabins
export const deleteCabins = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Error deleting data from cabins");
  }
  return data;
};
