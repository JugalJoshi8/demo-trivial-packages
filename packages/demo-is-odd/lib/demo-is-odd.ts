import { isEven } from "demo-is-even";
console.log('test1')

export function isOdd(n: number) {
  return !isEven(n);
}
