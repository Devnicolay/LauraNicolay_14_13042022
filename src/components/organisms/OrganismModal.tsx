import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface Modal {
activeModal: string
closeModal: any
}

const OrganismModal = (props: Modal) => {

    return (
        <div>
            {props.activeModal ? (
          <div id='confirmation'>
              <div className='modal'>
                  Employee Created!
                  <FontAwesomeIcon className='close-modal' icon={faCircleXmark} onClick={props.closeModal} />
              </div>
      </div>
        ) : (
          null
        )}
        </div>
    );
};


export default OrganismModal;

