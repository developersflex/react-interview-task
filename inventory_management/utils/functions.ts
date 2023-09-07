export function getStatusClassName(status: string) {
  switch (status) {
    case "Completed":
      return "bg-brand-green-1000";
    case "On Hold":
      return "bg-brand-red-1000";
    case "On Road":
      return "bg-brand-yellow-1000";
    case "In Progress":
      return "bg-brand-green-1001";
    default:
      return "";
  }
}
