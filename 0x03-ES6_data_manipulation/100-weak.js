export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (!weakMap.has(endPoint)) {
    weakMap.set(endPoint, 0);
  }
  const queryCount = weakMap.get(endPoint) + 1;
  weakMap.set(endPoint, queryCount);

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
