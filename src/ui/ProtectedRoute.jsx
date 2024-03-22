/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// This is a function used to authorize only authenticated users into our application!

import { styled } from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Because we want the spinner to render in the center of the page!
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // STEP 1. Load the authenticated users!
  const { isLoading, isAuthenticated } = useUser();

  // STEP 2. If there is NO authenticated users, redirect to the login page!
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // STEP 3. While loading, show a spinner!
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // STEP 4. If there IS a user, render the app!
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
