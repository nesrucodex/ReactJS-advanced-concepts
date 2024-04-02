export function formatPrice(price) {
  return new Intl.NumberFormat("eth", {
    style: "currency",
    currency: "ETB",
  }).format(price);
}
