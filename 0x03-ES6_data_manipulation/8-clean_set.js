export default function cleanSet(set, startString) {
  let string = '';
  if (startString === '') {
    return string;
  }
  for (const elem of set) {
    if (elem.startsWith(startString)) {
      string += `${elem.slice(3)}-`;
    }
  }
  return string.slice(0, -1);
}
