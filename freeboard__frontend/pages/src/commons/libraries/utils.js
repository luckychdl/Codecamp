export function getDate(date) {
  const yyyy = new Date(date).getFullYear();
  const mm = String(new Date(date).getMonth() + 1).padStart(2, "0");
  const dd = String(new Date(date).getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}
