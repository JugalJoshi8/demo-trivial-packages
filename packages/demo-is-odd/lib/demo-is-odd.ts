import { isEven } from "demo-is-even";
console.log('test')

export function isOdd(n: number) {
  return !isEven(n);
}
