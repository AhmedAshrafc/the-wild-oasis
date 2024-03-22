/* eslint-disable no-unused-vars */
// This is a custom hook that fetches the settings data from Supabase! From the apiSettings.js
// We could've easily written this code in UpdateSettingsForm.jsx file but to keep things clean we are going to do it here!

import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
}
