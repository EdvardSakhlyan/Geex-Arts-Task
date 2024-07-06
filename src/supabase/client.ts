import { createClient } from "@supabase/supabase-js";
import { ANON_KEY, BASE_URL } from "../constants/supabase";

const client = createClient(BASE_URL, ANON_KEY);

export default client;
