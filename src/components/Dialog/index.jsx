import React, { useEffect, useRef } from "react";
import "./dialog.style.css";

export function Dialog({isOpen, onClose }) {
  // Não deveríamos fazer buscas no DOM desse jeito!
  //const dialog = document.querySelector("dialog");

  const dialogRef = useRef(null);

  useEffect (() => {
    console.log('Deveríamos mostrar a modal?', isOpen);
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen])

  // "Show the dialog" button opens the dialog modally
  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // "Close" button closes the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };
  return (
    <React.Fragment>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>Close</button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
    </React.Fragment>
  );
}
