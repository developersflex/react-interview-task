export function getStatusClassName(status: string) {
  switch (status) {
    case "Completed":
      return "bg-brand-green-main";
    case "On Hold":
      return "bg-brand-red";
    case "On Road":
      return "bg-brand-yellow";
    default:
      return "bg-brand-green-light";
  }
}
