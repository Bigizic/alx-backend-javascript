export default function cleanSet(set, startString) {
  const newSet = Array.from(set);
  const res = newSet.filter((e) => e.startsWith(startString));

  return res.map((v) => v.slice(startString.length)).join('-');
}
