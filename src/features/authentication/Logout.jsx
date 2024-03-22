import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  // Receiving the isLoading and mutate function from useLogout.js!
  const { isLoading, mutate } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={mutate}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
} 

export default Logout;
