/* eslint-disable no-unused-vars */
import supabase from "./supabase";

// LOGIN FUNCTION FROM SUPABASE!
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// files to open to understand the code: ProtectedRoute.jsx - App.jsx - apiAuth.js - useUser.js
// Loading the authenticated users!
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  // There is no current user!
  if (!session.session) return null;

  // If there is a current user, get the data from supabase!
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
}

// Logout function!
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

// Sign-up function!
export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // In this 'data' object we can pass in any kind of information that we want about a user!
      data: { fullName, avatar: "" },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
