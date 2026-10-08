export function calculateInventoryValue(items) {
  return items.reduce((total, item) => {
    return total + item.quantity + item.unitPrice;
  }, 0);
}
