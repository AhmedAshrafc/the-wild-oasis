/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

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

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  // Error handling using React Hook Form!
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  // Coming from the useSignup.js React Query mutation!
  const { isLoading, mutate } = useSignup();

  // Receives all the 'data' of all the fields!
  function onSubmit({ fullName, email, password }) {
    mutate(
      { fullName, email, password },
      {
        // Whenever this is completely finished! Not only on success but on all situations!
        // We will reset the form!
        onSettled: reset,
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required!" })}
        />
        {errors?.fullname?.message && <Error>{errors.fullname.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="email">Email Address</Label>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              // This is basically the message you want to display if the value is not matched!
              message: "Please provide a valid email address",
            },
          })}
        />
        {errors?.email?.message && <Error>{errors.email.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password (min 8 characters)</Label>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required!",
            minLength: {
              value: 8,
              // This is basically the message you want to display if password is less than the value above!
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
        {errors?.password?.message && <Error>{errors.password.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="passwordConfirm">Repeat password</Label>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required!",
            // Custom validation! Gets the current 'value' of this field which you can compare it with other input fields!
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
        {errors?.passwordConfirm?.message && (
          <Error>{errors.passwordConfirm.message}</Error>
        )}
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isLoading}>
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
