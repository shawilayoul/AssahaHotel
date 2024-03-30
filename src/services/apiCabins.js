import supabase from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");
  if(error){
    console.error(error);
    throw new Error("Error loading data from cabins")
  }

  return data;
};
