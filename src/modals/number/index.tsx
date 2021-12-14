import { Graph } from "@components";
import { useState } from "react";
import Modal from "react-modal";

import "./styles.scss";

const _number = 
  "1" ||
  "2" ||
  "3" ||
  "4" ||
  "5" ||
  "6" ||
  "7" ||
  "8" ||
  "9" ||
  "0"

const _enter =
  "Backspace" ||
  "Return" ||
  "Enter" ||
  "Space" ||
  "Tab"


export default function Number() {
  const [number, setNumber] = useState(0);
  
  document.body.addEventListener("keyup", e => handleKeyboard);

  function closeModal() {
    
  }

  function handleKeyboard(e: KeyboardEvent) {
    switch (e.key) {
      case _number:
        setNumber(parseInt(e.key));
        break;
      case _enter:
        return (
          
        );
    }
  }
  
  return (
    <Modal
      isOpen={true}
      overlayClassName={"NumberModalOverlay"}
      className={"NumberModalContent"}
    >
      <div className="NumberModalTitle">
        Type a number
      </div>
      <div className="NumberModalInput">
        <span>
          0
        </span>
      </div>
    </Modal>
  )
}
