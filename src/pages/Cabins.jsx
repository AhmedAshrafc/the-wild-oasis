/* eslint-disable no-unused-vars */
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import ConfirmModal from "../features/cabins/ConfirmModal";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        <Button onClick={handleOpenForm}>Add new cabin</Button>
        {showForm && <CreateCabinForm onClose={handleCloseForm} />}
      </Row>
    </>
  );
}

export default Cabins;
