/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { HiOutlineHome } from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

// We do it this way if we want to style a 3rd party component! In this the NavLink is coming from React Router.
// So style it using: stlyed([name of the 3rd party component])
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <ul>
        <NavList>
          <li>
            {/* This is exactly <NavLink></NavLink>! We just styled it and named it StyledNavLink above! */}
            <StyledNavLink to="/dashboard">
              <lord-icon
                src="https://cdn.lordicon.com/etqbfrgp.json"
                trigger="hover"
                colors="outline:#131432,primary:#92140c,secondary:#f24c00,tertiary:#b26836,quaternary:#ebe6ef"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
              <span>Home</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/bookings">
              <lord-icon
                src="https://cdn.lordicon.com/ttioogfl.json"
                trigger="morph"
                colors="primary:#121331,secondary:#ebe6ef,tertiary:#4bb3fd,quaternary:#92140c,quinary:#f9c9c0"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
              <span>Bookings</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/cabins">
              <lord-icon
                src="https://cdn.lordicon.com/zadmimxy.json"
                trigger="hover"
                colors="primary:#121331,secondary:#ebe6ef,tertiary:#3a3347,quaternary:#ffc738,quinary:#f24c00,senary:#b26836,septenary:#f28ba8"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
              <span>Cabins</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/users">
              <lord-icon
                src="https://cdn.lordicon.com/vusrdugn.json"
                trigger="hover"
                colors="primary:#121331,secondary:#b26836,tertiary:#4bb3fd,quaternary:#f9c9c0,quinary:#ebe6ef"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
              <span>Users</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/settings">
              <lord-icon
                src="https://cdn.lordicon.com/oncyjozz.json"
                trigger="hover"
                colors="outline:#121331,primary:#646e78"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
              <span>Settings</span>
            </StyledNavLink>
          </li>
        </NavList>
      </ul>
    </nav>
  );
}

export default MainNav;
