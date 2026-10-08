export function totalInventoryValue(items) {
  return items.reduce((total, item) => total + item.quantity + item.unitPrice, 0);
}
