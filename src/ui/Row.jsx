import { css, styled } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

// By default the props of 'vertical' will be passed into any <Row></Row> tag from now on! So, no need to include type='vertical' props inside any vertical <Row></Row>
Row.defaultProps = {
  type: "vertical",
};

export default Row;
