import test from "node:test";
import assert from "node:assert/strict";
import { calculateInventoryValue } from "../src/calculator.js";

test("calculates the total value of all inventory items", () => {
  const inventory = [
    { name: "Camera", quantity: 2, unitPrice: 1500 },
    { name: "Tripod", quantity: 3, unitPrice: 200 }
  ];

  assert.equal(calculateInventoryValue(inventory), 3600);
});

test("returns zero for an empty inventory", () => {
  assert.equal(calculateInventoryValue([]), 0);
});
