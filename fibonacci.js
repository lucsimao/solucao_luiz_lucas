fibonacci = function(enesimo) {
    return enesimo <= 2 ? 1 : fibonacci(enesimo-1) + fibonacci(enesimo-2);
}
console.log(fibonacci(7));