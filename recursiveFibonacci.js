//Fibonacci using recursive method.

const recursiveFibonacci = (n) => {
    if(n<2){
        return n;
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}