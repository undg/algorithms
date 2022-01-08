import {expect} from "https://cdn.skypack.dev/chai@4.3.4?dts";

import {combinationSum} from './mod.ts'

Deno.test('case1', () => {
  const input = [1, 2, 3, 4];
  const k = 5;
  const output = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 2],
    [1, 1, 3],
    [1, 2, 2],
    [1, 4],
    [2, 3]
  ];

  expect(combinationSum(input, k)).to.be(true);
});
/*/
Deno.test('case2', () => {
  const input = [2, 4, 6, 8];
  const k = 8;

  const output = [[2, 2, 2, 2], [2, 2, 4], [2, 6], [4, 4], [8]];

  expect(combinationSum(input, k)).to.be(output);
});
/**/
