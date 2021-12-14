import { useState } from "react";
import Modal from "react-modal";

import "./styles.scss";

export default function Number() {
  const [number, setNumber] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  
  function handleKeyboard(e: KeyboardEvent) {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.key == ("Backspace"))
      setNumber(parseInt(number.toString().slice(0, -1)));
    if (e.key == ("Return" || "Enter" || "Space" || "Tab"))
      setModalOpen(false);
    if (e.key == "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0")
      if (number.toString().length < 6)
        setNumber(parseInt(`${number}${e.key}`));
  }

  function closeModal() {
    
  }

  return (
    <>
    <button className="OpenChooseNumberModalButton" onClick={() => setModalOpen(true)}>
      Choose Number
    </button>
    <Modal
      isOpen={modalOpen}
      overlayClassName={"NumberModalOverlay"}
      className={"NumberModalContent"}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      contentElement={(props, contentElement) => <div onKeyUp={(e: any) => handleKeyboard(e)} {...props}>{contentElement}</div>}
    >
      <div className="NumberModalTitle">
        Type a number
      </div>
      <div className="NumberModalInput">
        <span>
          {number}
        </span>
      </div>
    </Modal>
    </>
  )
}
