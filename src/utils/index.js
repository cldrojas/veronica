export function classList(classes) {
  return Object.entries(classes)
    .filter(([className, active]) => active)
    .map(([className]) => className)
    .join(" ");
}
