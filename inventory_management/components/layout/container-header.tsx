import React from "react";

const ContainerHeader = ({ text }: { text: string | undefined }) => {
  return (
    <div className="px-5 py-2 font-semibold bg-brand-background-secondary">
      {text}
    </div>
  );
};

export default ContainerHeader;
