const nextElementInList = (list: string[], value: string) => {
  const currentActionIndex = list.indexOf(value);
  // keep selection always in the array, not out of bounds
  const nextValueIndex = (currentActionIndex + 1) % list.length;
  const nextValue = list[nextValueIndex];
  return nextValue;
};

export default nextElementInList;
