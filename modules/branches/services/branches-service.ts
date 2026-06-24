import { supabase } from "@/supabase/client";

export async function getBranches() {
  const { data, error } = await supabase
    .from("branches")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
