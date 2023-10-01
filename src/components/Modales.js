import React, { useState, useEffect } from "react";

const SetModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeWithTransition = () => {
    const modalElement = document.querySelector(".modal");
    if (modalElement) {
      modalElement.style.opacity = "0"; // Fade out
      setTimeout(() => {
        setIsModalOpen(false); // Remove from DOM after transition completes
      }, 300); // 300ms matches the transition duration we set in the CSS
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      const modalElement = document.querySelector(".modal");
      if (modalElement) {
        // Allow some time for the modal element to get attached to the DOM
        setTimeout(() => {
          modalElement.style.opacity = "1"; // Fade in
        }, 10);
      }
    }
  }, [isModalOpen]);

  return (
    <div className="button1">
      <button
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsModalOpen(true);
        }}
        className="openModalButton"
      >
        Payment Method
      </button>

      {isModalOpen && (
        <>
          <div className="overlay" onClick={closeWithTransition}></div>
          <div className="modal">
            <button
              title="Close"
              className="close"
              onClick={closeWithTransition}
            >
              X
            </button>

            <h2>Hello dude!</h2>
            <p>Accept payment methods:</p>
            <div>→ Bank Transfer</div>
            <div>→ Paypal</div>
            <div>→ Bitcoin</div>
            <div>→ Sinpe Movil</div>
          </div>
        </>
      )}
    </div>
  );
};

export default SetModal;
