/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ReactDOM from "react-dom";
import { useDarkMode } from "../../context/DarkModeContext";
import { useEffect, useRef } from "react";

const Overlay = styled.div`
  position: fixed;
  /* Background color must be rgba in order for the backdrop-filter to work properly! */
  background-color: rgba(217, 213, 213, 0.6);
  backdrop-filter: blur(2px);
  /* opacity: 0.8; */
  inset: 0;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
  padding: 25px;
  font-weight: bold;
  width: 650px;
  height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function ConfirmModal({ children, onClose }) {
  const { isDarkMode } = useDarkMode();

  // This is the code for the clicking outside the modal for closure feature! Just try to get the handle modal close function in here!
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        // This basically means that if we clicked on any element that is inside the modal, don't close it! Only when we click somewhere outside the modal!
        // 'ref.current' is the modal box itself!
        if (ref.current && !ref.current.contains(e.target)) {
          onClose();
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [onClose]
  );

  return ReactDOM.createPortal(
    // First argument all the JSX that I want to show!
    <div>
      <Overlay></Overlay>
      <ModalBox
        className={isDarkMode ? "bg-dark-mode" : "bg-light-mode"}
        ref={ref}
      >
        {children}
      </ModalBox>
    </div>,
    // Second argument will be a reference to that div (modal-container) in index.html!
    document.querySelector(".modal-container")
  );
}

export default ConfirmModal;
