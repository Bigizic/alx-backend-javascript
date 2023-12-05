export default function cleanSet(set, startString) {
  const newSet = Array.from(set);
  if (startString.length > 0) {
    const res = newSet.filter((e) => e.startsWith(startString));
    return res.map((v) => v.slice(startString.length)).join('-');
  }
}
