export const mapPriorityToColor = (priority) => {
  switch (priority) {
    case "high":
      return "red";
    case "medium":
      return "yellow";
    default:
      return "green";
  }
};
