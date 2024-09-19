const { sum, deduct } = require("./index");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("deducts 2 - 1 to equal 1", () => {
  expect(deduct(2, 1)).toBe(1);
});
