import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lhdzsotqnnrvlbtyzxuh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoZHpzb3Rxbm5ydmxidHl6eHVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3NTQwMDYsImV4cCI6MjAyNzMzMDAwNn0.fU6ucMXhwIW0LEcK7tYjnilDhqcfgtp6SVP0aJo9B5M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
