import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  activeModal: string;
  closeModal: any;
}

const OrganismModal: React.FC<ModalProps> = ({ activeModal, closeModal }) => {
  return (
    <div>
      {activeModal ? (
        <div id="confirmation">
          <div className="modal">
            Employee Created!
            <FontAwesomeIcon
              className="close-modal"
              icon={faCircleXmark}
              onClick={closeModal}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default OrganismModal;
