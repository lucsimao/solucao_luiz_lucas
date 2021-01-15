fibonacci = function(enesimo) {
    if(enesimo<=2)
        return 1;
    return fibonacci(enesimo-1) + fibonacci(enesimo-2);
}

console.log(fibonacci(7));