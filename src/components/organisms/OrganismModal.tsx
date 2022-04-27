import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import OrganismForm from "./OrganismForm.tsx"

interface Modal {
activeModal: string
}

const OrganismModal = (props: Modal) => {

    return (
        <div>
            {props.activeModal ? (
          <div id='confirmation'>
              <div className='modal'>
                  Employee Created!
                  <FontAwesomeIcon className='close-modal' icon={faCircleXmark} onClick={OrganismForm.closeModal} />
              </div>
      </div>
        ) : (
          null
        )}
        </div>
    );
};


export default OrganismModal;

