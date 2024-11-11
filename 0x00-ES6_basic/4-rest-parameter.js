export default function returnHowManyArguments(...args) {
  let sum = 0;
  for (const arg of args) sum += 1; // eslint-disable-line no-unused-vars
  return sum;
}
