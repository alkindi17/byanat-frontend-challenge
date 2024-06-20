import { Button, Modal } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";

import { hideModal } from "@/lib/state/add-stay-modal/addStayModalSlice";
import { RootState } from "@/lib/state/store";

import AddStayForm from "./add-stay-form";

/**
 * Renders the Add Stay Modal
 * @returns the Add Stay Modal component
 */
export default function AddStayModal() {
  // Get the showModal state
  const showModal = useSelector(
    (state: RootState) => state.addStayModal.showModal,
  );

  // Get the dispatch function
  const dispatch = useDispatch();

  // Hide the modal handler
  const handleHideModal = () => {
    dispatch(hideModal());
  };

  return (
    <Modal show={showModal} onClose={handleHideModal}>
      <Modal.Header className="flex items-center">Add New Stay</Modal.Header>
      <Modal.Body>
        <AddStayForm />
      </Modal.Body>

      <Modal.Footer className="flex justify-end">
        <Button color="gray" onClick={handleHideModal}>
          Cancel
        </Button>
        <button
          className="rounded-lg bg-primary-400 px-4 py-2 text-white hover:bg-primary-500"
          type="submit"
          form="addStayForm"
        >
          Add Stay
        </button>
      </Modal.Footer>
    </Modal>
  );
}
