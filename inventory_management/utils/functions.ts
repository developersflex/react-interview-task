export function getStatusClassName(status: String) {
  if (status === "Completed") return "bg-brand-green-main";
  if (status === "On Hold") return "bg-brand-red";
  if (status === "On Road") return "bg-brand-yellow";
  if (status === "In Progress") return "bg-brand-green-light";
}
