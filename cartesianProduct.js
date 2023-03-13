const cartersianProduct = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
};
