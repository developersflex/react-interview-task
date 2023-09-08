import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="fixed inset-0 bg-black opacity-50 transition-all" />
      <div className="relative z-10 bg-white rounded-lg shadow-md flex flex-col justify-between min-h-[400px] w-fit md:w-[868px]">
        <div className="flex items-center justify-between rounded-lg bg-brand-background w-full px-5 py-2">
          {title}
          <button
            onClick={onClose}
            className="absolute right-2 text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="h-full justify-between flex flex-col p-5 gap-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
