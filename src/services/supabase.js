import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wvxhpdekdiunmgzuzyyy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2eGhwZGVrZGl1bm1nenV6eXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwMTk5ODQsImV4cCI6MjAwNDU5NTk4NH0.S4iygy2oU8jiAmQJMHE0vfXeyQvmYHzaAgvaGNzFCtw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
