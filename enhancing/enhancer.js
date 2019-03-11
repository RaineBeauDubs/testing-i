module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancer = item.enhancement;
  const enhanced = () => {
    if (enhancer < 20) {
      enhancer = enhancer + 1
      console.log(enhancer);
      return enhancer;
    }
  }
  return { ...item, enhancement: enhanced()};
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const newItem = item;
  newItem.durability = 100;
  return newItem;
}

function get(item) {
  return { ...item };
}