import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oqypxvdufzinoaeysfsa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xeXB4dmR1Znppbm9hZXlzZnNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyNzM0NTQsImV4cCI6MjA2NDg0OTQ1NH0.pF3M1TZutM1T3iZRKxq2frxja3naIl9xptBsoynxbys";

export const supabase = createClient(supabaseUrl, supabaseKey);
