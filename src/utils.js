export { profession };
export function sum(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}
let profession = "WEB DEVELOPER!!!";
export default { sum, multiply, profession };
export var x = 24;
setTimeout(() => (profession = "newone"), 10000);
