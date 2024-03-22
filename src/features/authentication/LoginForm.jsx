/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { login } from "../../services/apiAuth";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem;
  gap: 1rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

function LoginForm() {
  const [email, setEmail] = useState("toni@example.com");
  const [password, setPassword] = useState("toni123");

  // Destructing the function that is in useLogin.js to use it here!
  const { isLoading, mutate } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    mutate(
      { email, password },
      // This onSettled is used so if the user put incorrect email/password, the input fields are automatically reset!
      {
        onSettled: () => {
          setEmail(""), setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <Label htmlFor="email">Email address</Label>
        <Input
          type="email"
          id="email"
          style={{ width: "400px" }}
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          style={{ width: "400px" }}
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        <Button size="large" style={{ width: "100%" }} disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
