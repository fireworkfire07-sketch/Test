import test from "node:test";
import assert from "node:assert/strict";
import { totalInventoryValue } from "../src/inventory.mjs";

test("calculates inventory value from quantity and unit price", () => {
  assert.equal(totalInventoryValue([{ quantity: 5, unitPrice: 4 }]), 20);
});
