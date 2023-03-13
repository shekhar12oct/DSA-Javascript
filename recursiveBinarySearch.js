const recursiveBinarySearch = (arr, target) => {
  return recursiveBinarySearch(arr, length, 0, arr.length - 1);
};

const search = (arr, length, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
  if (target < middleIndex) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return arr, target, middleIndex + 1, rightIndex;
  }
};
