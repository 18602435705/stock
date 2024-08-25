import Big, { BigSource } from 'big.js';

// 加
export const add = (a: BigSource, b: BigSource) => Big(a).add(Big(b)).toString();

// 减
export const minus = (a: BigSource, b: BigSource) => Big(a).minus(Big(b)).toString();

// 乘
export const mul = (a: BigSource, b: BigSource) => Big(a).mul(Big(b)).toString();

// 除
export const division = (a: BigSource, b: BigSource) => Big(a).div(Big(b)).toString();

// 四舍五入
export const toFixed = (a: BigSource, n = 2) => Big(a).toFixed(n);
