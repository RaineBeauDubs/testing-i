const enhancer = require('./enhancer.js');
const { dragonboneMace } = require('../items/weapons');
const { succeed } = require('./enhancer');

describe('enhancer.js', () => {

  test('can run the tests', () => {
    expect(true).toBe(true);
  });

  describe('succeed()', () => {
    const item = dragonboneMace;
    const newItem = enhancer.succeed(item);
    expect(succeed(newItem).enhancement).toBe(14)
  })

  describe('repair()', () => {
    it('should return new item w/durability = 100', () => {
      const item = dragonboneMace;
      const newItem = enhancer.repair(item);
      expect(newItem.durability).toBe(100);
    });
  });
});