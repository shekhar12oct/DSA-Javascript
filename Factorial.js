// Factorial series without Recursion

const factorial = (n) => {
  let factorial = 1;
  if (n < 0) {
    return undefined;
  } else if (n >= 0 && n < 2) {
    return 1;
  } else if (n >= 2) {
    for (let i = n; i >= 2; i--) {
      factorial *= i;
    }
  }

  return factorial;
}; 
