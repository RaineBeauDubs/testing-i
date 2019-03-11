const enhancer = require('./enhancer.js');
const { dragonboneMace } = require('../items/weapons');

describe('enhancer.js', () => {

  test('can run the tests', () => {
    expect(true).toBe(true);
  });

  describe('repair()', () => {
    it('should return new item w/durability = 100', () => {
      const item = dragonboneMace;
      const newItem = enhancer.repair(item);
      expect(newItem.durability).toBe(100);
    });
  });
});