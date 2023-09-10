import Chip from "@/components/Chip";
import { Jobsite } from "@/types";
import Link from "next/link";

export const columns = [
  {
    header: "Jobsite Name",
    key: "name",
    className: "w-1/2 p-2 md:text-left md:pl-[750px]",
    render: (item: Jobsite) => (
      <Link
        href={`/jobsites/${item.id}`}
        className="text-[#1264A3] text-left  font-semibold whitespace-break-spaces"
      >
        {item.name}
      </Link>
    ),
  },
  {
    header: "Status",
    key: "status",
    className: `w-1/2`,
    render: (cell: Jobsite) => <Chip text={cell.status} />,
  },
];
