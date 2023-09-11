import { getStatusClassName } from "@/utils/functions";

interface CardProps {
  name: string;
  value: number;
}

export const HeaderCard: React.FC<CardProps> = ({ name, value }) => {
  return (
    <div
      className={`rounded-lg h-28 flex items-center justify-center bg-${getStatusClassName(
        name
      )}`}
    >
      {value} {name}
    </div>
  );
};
