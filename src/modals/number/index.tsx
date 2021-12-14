import { Graph } from "@components";
import { useState } from "react";
import Modal from "react-modal";

import "./styles.scss";

interface ICollatz { 
  steps: number;
  initialNumber: number;
  collatz: number[];
}

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
      setNumber(parseInt(`${number}${e.key}`));

    return;
  }

  function closeModal() {
    
  }

  function calculateCollatz(number: number): ICollatz {
    const initialNumber = number;
    let collatz = [number];
    let steps = 0;

    while (number != 1) {
      if (number % 2 === 0) number = number / 2;
      else number = number * 3 + 1;

      collatz.push(number);
      steps++;
    }
    
    return { steps, initialNumber, collatz };
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
      contentElement={(props, contentElement) => <div onKeyUp={(e) => handleKeyboard(e)} {...props}>{contentElement}</div>}
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
