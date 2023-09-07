export function getStatusClassName(status: string) {
  console.log("status", status);

  switch (status) {
    case "Completed":
      return " hover:bg-red-500";
    case "On Hold":
      return "bg-brand-red";
    case "On Road":
      return "bg-brand-yellow";
    default:
      return "bg-brand-green-light";
  }
}
