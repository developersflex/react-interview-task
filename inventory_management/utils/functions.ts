export function getStatusClassName(status: string) {
  switch (status) {
    case "Completed":
      return "bg-brand-green-main";
    case "On Hold":
      return "bg-brand-red";
    case "On Road":
      return "bg-brand-yellow";
    case "In Progress":
      return "bg-brand-green-light";
    default:
      return "";
  }
}
