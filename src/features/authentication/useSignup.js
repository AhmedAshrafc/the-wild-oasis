import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

// Once again using React Query!
export function useSignup() {
  const { isLoading, mutate } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
    },
  });

  return { isLoading, mutate };
}
