import { supabase } from "./supabaseClient";

export async function logPrediction(
  content: string,
  prediction: "spam" | "ham",
  confidence: number,
  threshold_used: number
) {
  const { error } = await supabase.from("messages").insert([
    {
      content,
      prediction,
      confidence,
      threshold_used,
    },
  ]);
  return error;
}

export async function saveContact(
  name: string,
  email: string,
  message: string
) {
  const { error } = await supabase
    .from("contact")
    .insert([{ name, email, message }]);
  return error;
}
