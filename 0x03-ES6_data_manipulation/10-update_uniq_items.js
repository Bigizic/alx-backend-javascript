export default function updateUniqueItems(oldMap) {
  let updated = false;

  oldMap.forEach((value, key) => {
    if (value === 1) {
      oldMap.set(key, 100);
      updated = true;
    }
  });

  if (!updated) {
    throw new Error('Cannot process');
  }

  return oldMap;
}
