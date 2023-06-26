export default function returnHowManyArguments(...args) {
  let count = 0;
  for (const _ of args) {
    count += 1;
  }
  return count;
}
