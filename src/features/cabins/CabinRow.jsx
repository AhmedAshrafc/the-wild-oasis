/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { HiMiniPencilSquare, HiTrash } from "react-icons/hi2";
import Button from "../../ui/Button";
import ConfirmModal from "./ConfirmModal";
import { useDarkMode } from "../../context/DarkModeContext";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const ModifyButton = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);

  padding: 7px;
`;

function CabinRow({ cabin }) {
  const { isDarkMode } = useDarkMode();

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  // For the edit feature!
  const [showForm, setShowForm] = useState(false);

  const handleClose = () => {
    setShowForm(false);
  };

  // Destructuring the cabin object!
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  // To get the query client that is in the App so we can use it to invalidate and re-fetch our UI!
  const queryClient = useQueryClient();

  // This is how we do mutations in React Query! (Delete a record for example!)
  // We are just renaming isLoading to isDeleting to be more readable!
  // This 'mutate' function is used to invoke all this code below!
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    // To tell React Query what to do as long as the mutation was successful! Invalidating the cache so we can get an auto re-fetch!
    onSuccess: () => {
      toast.success("Cabin successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <ModifyButton
            onClick={() => setShowForm((showForm) => !showForm)}
            className={isDarkMode ? "bg-dark-mode" : ""}
          >
            <HiMiniPencilSquare />
          </ModifyButton>
          <ModifyButton
            // onClick={() => mutate(cabinId)}
            onClick={handleModalOpen}
            disabled={isDeleting}
            className={isDarkMode ? "bg-dark-mode" : ""}
          >
            <HiTrash />
          </ModifyButton>
        </div>
      </TableRow>
      {showForm && (
        <CreateCabinForm cabinToEdit={cabin} onClose={handleClose} />
      )}
      {/* MODAL */}
      <div>
        {showModal && (
          <ConfirmModal onClose={handleModalClose}>
            <p>
              Are you sure you want to delete this cabin? This action will
              permanently delete it and cannot be undone!
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "end",
                gap: "15px",
              }}
            >
              <Button
                onClick={handleModalClose}
                style={{
                  color: "black",
                  backgroundColor: "var(--color-grey-200)",
                  border: "1px solid black",
                  boxShadow: "var(--shadow-sm )",
                }}
              >
                Cancel
              </Button>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "var(--color-red-700)",
                  border: "1px solid var(--color-red-700)",
                  boxShadow: "var(--shadow-sm )",
                }}
                onClick={() => mutate(cabinId)}
              >
                Delete
              </Button>
            </div>
          </ConfirmModal>
        )}
      </div>
    </>
  );
}

export default CabinRow;
