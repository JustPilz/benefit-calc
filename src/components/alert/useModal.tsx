import React, { useState } from "react";
import Button from "../buttons/Button";

function useModal() {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const openModal = (title: string, description: string) => {
    setModalTitle(title);
    setModalDescription(description);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const Modal = () => {
    if (!showModal) {
      return null;
    }
    return (
      <div
        data-te-modal-init
        className="fixed top-0 left-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden bg-slate-500 bg-opacity-70 outline-none "
        role="dialog"
      >
        <div className="bg-blur pointer-events-none relative flex min-h-[100%] w-auto items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
          <div className="pointer-events-auto relative m-4 flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalCenteredScrollableLabel"
              >
                {modalTitle}
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                aria-label="Close"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="relative p-4">{modalDescription}</div>
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <Button variant="primary" onClick={closeModal}>
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return { openModal, closeModal, Modal };
}

export default useModal;
