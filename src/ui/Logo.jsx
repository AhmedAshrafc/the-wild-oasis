import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { useNavigate } from "react-router-dom";

const StyledLogo = styled.div`
  text-align: center;
  cursor: pointer;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const navigate = useNavigate();

  // To change the logo for Dark Mode feature!
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo onClick={() => navigate("/")}>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
