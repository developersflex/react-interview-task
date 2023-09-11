export function getStatusClassName(status: string) {
  if (status === "Completed") {
    return "brand-green-1000";
  } else if (status === "On Hold") {
    return "brand-red-1000";
  } else if (status === "On Road") {
    return "brand-yellow-1000";
  } else if (status === "In Progress") {
    return "brand-green-1001";
  } else {
    return "brand-green-500";
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
  Completed: "hover:bg-brand-green-1000 hover:text-white",
  "In Progress": "hover:bg-brand-green-1001 hover:text-white",
  "On Hold": "hover:bg-brand-red-1000 hover:text-white",
  "On Road": "hover:bg-brand-yellow-1000 hover:text-white",
  "Sidewalk Shed": "hover:bg-brand-green-1000 hover:text-white",
  Scaffold: "hover:bg-brand-yellow-1000 hover:text-white",
  Shoring: "hover:bg-brand-purple-1000 hover:text-white",
};

export function circleDynamicBgStyles(status: string) {
  if (status === "Completed" || status === "Sidewalk Shed")
    return "fill-brand-green-1000";
  else if (status === "On Hold") return "fill-brand-red-1000";
  else if (status === "On Road" || status === "Scaffold")
    return "fill-brand-yellow-1000";
  else if (status === "Shoring") return "fill-brand-purple-1000";
  else if (status === "In Progress") return "fill-brand-green-1001";
}
