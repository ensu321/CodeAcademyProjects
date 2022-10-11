const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
];

function fn(items) {
  items.sort((a, b) => a.price - b.price);
  return {
    pigiausias: items[0].name,
    brangiausias: items[items.length - 1].name,
  };
}
console.log(fn(drinks));
