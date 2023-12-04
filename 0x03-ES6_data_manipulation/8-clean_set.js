export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const newSet = Array.from(set);
  const res = newSet.filter((e) => e.startsWith(startString));

  const result = res.map((v) => v.slice(startString.length)).join('-');

  return result;
}
