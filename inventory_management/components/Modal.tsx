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
    <div className="fixed inset-0 flex items-center justify-center z-50  ">
      <div className="fixed inset-0 bg-black opacity-50 transition-all" />
      <div className="relative z-10 bg-white rounded-lg shadow-md flex flex-col justify-between md:w-[868px] min-h-[400px]">
        {/* modal header */}
        <div className="px-5 py-3 bg-brand-background-primary rounded-md">
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
        {/* modal content */}
        <div className="h-full p-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
