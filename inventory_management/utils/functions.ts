export function getStatusClassName(status: string) {
  console.log("status", status);

  switch (status) {
    case "Completed":
      return "brand-green-1000";
    case "On Hold":
      return "brand-red-1000";
    case "On Road":
      return "brand-yellow-1000";
    case "In Progress":
      return "brand-green-1001";
    default:
      return "";
  }
}

export function getCategoryClassName(category: string) {
  switch (category) {
    case "Sidewalk Shed":
      return "bg-brand-green-1002";
    case "Scaffold":
      return "bg-brand-yellow-1001";
    default:
      return "bg-brand-purple-1000";
  }
}

export const hoverDynamicBgStyles: Record<string, string> = {
  Completed: "hover:bg-brand-green-1000",
  "In Progress": "hover:bg-brand-green-1001",
  "On Hold": "hover:bg-brand-red-1000",
  "On Road": "hover:bg-brand-yellow-1000",
};

export function circleDynamicBgStyles(status: string) {
  switch (status) {
    case "Completed":
      return "fill-brand-green-1000";
    case "On Hold":
      return "fill-brand-red-1000";
    case "On Road":
      return "fill-brand-yellow-1000";
    case "In Progress":
      return "fill-brand-green-1001";
    default:
      return "";
  }
}
