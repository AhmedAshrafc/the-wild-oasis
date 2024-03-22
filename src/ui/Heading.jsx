/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { css, styled } from "styled-components";

// This will return a new component! So save it inside a variable!
// What is cool about this is that it can behave just like a React component! Meaning it can receive all the props that regular JSX element can receive!
// Conditionally define this font-size! font-size: ${10 > 5 ? '30px' : '5px'}

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  /* Receive that prop here! */
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}

  line-height: 1.4;
`;

export default Heading;
