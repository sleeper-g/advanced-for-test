import orderByProps from '../main';

test('example', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
  const res = [
  {key: "name", value: "мечник"},
  {key: "level", value: 2},
  {key: "attack", value: 80},
  {key: "defence", value: 40},
  {key: "health", value: 10}
];
  expect(orderByProps(obj, ["name", "level"])).toEqual(res);
});

test('empty', () => {
  const obj = {};
  const res = [];
  expect(orderByProps(obj, ["name"])).toEqual(res);
})
