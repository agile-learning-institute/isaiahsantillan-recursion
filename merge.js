const array = [
  [3, 21, 2, 34, 1, 13, 8, 5, 0, 1],
  [105, 190, 79, 100, 110],
  [56, 21, 48, 10, 0, 2, 78, 788, 1444, 1],
];

console.log(mergeSort(array[0]));
console.log(mergeSort(array[1]));
console.log(mergeSort(array[2]));

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const splitArray = array.length / 2;
  const leftArray = array.slice(0, splitArray);
  const rightArray = array.slice(splitArray, array.length);

  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);
  const sorted = merge(sortedLeft, sortedRight);

  return sorted;
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  for (; i < left.length; i++) {
    result.push(left[i]);
  }
  for (; j < right.length; j++) {
    result.push(right[j]);
  }
  return result;
}