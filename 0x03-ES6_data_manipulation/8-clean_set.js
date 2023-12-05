export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const newSet = Array.from(set);
  const res = newSet.filter((e) => e.startsWith(startString));

  const result = res.map((v) => v.slice(startString.length)).join('-');

  return result;
}
