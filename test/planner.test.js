const assert = require("node:assert/strict");
const test = require("node:test");

const recipes = new Map([
  ["riso-1", {
    id: "riso-1",
    ingredients: [
      { name: "Riso", qty: "150 g" },
      { name: "Uova", qty: "1" },
      { name: "Latte", qty: "500 ml" },
    ],
  }],
  ["riso-2", {
    id: "riso-2",
    ingredients: [
      { name: "Riso", qty: "200 g" },
      { name: "Uova", qty: "½" },
      { name: "Latte", qty: "0,5 l" },
    ],
  }],
]);

function normKey(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z ]/g, "").trim();
}

global.window = {
  Store: {
    getPantry: () => [],
    getRecipeById: (id) => recipes.get(id),
    normKey,
  },
};

require("../js/planner.js");
const Planner = global.window.Planner;

function allItems(list) {
  return list.order.flatMap((category) => list.grouped[category]);
}

test("interpreta decimali, frazioni e quantità non numeriche", () => {
  assert.deepEqual(Planner.parseQty("300 g"), { num: 300, unit: "g" });
  assert.deepEqual(Planner.parseQty("0,5 l"), { num: 0.5, unit: "l" });
  assert.deepEqual(Planner.parseQty("1 ½"), { num: 1.5, unit: "" });
  assert.equal(Planner.parseQty("q.b."), null);
});

test("scala e aggrega soltanto quantità con la stessa unità", () => {
  const plan = {
    meals: [
      { id: "riso-1", checked: true },
      { id: "riso-2", checked: true },
    ],
    snacksOn: false,
    snacks: [],
    people: 4,
  };

  const items = allItems(Planner.buildShoppingList(plan));
  const rice = items.find((item) => item.key === "riso");
  const eggs = items.find((item) => item.key === "uova");
  const milk = items.find((item) => item.key === "latte");

  assert.equal(rice.unitSums.g, 700);
  assert.equal(eggs.unitSums[""], 3);
  assert.deepEqual(milk.unitSums, { ml: 1000, l: 1 });
});

test("arrotonda gli elementi contabili ma non i pesi", () => {
  assert.equal(
    Planner.itemLine({ name: "Uova", unitSums: { "": 1.2 }, rawQtys: [] }),
    "Uova — 2",
  );
  assert.equal(
    Planner.itemLine({ name: "Riso", unitSums: { g: 350.25 }, rawQtys: [] }),
    "Riso — 350.3 g",
  );
});
