fibonacci = function(enesimo) {
    if(enesimo == 1)
        return 1;
    if(enesimo == 2)
        return 1;
    if(enesimo == 3)
        return 2;
    if(enesimo == 4)
        return 3;
    if(enesimo == 5)
        return 5;
    if(enesimo == 6)
        return 8;
    if(enesimo == 7)
        return 13;
    if(enesimo == 8)
        return 21;
    if(enesimo == 9)
        return 34;
    if(enesimo == 10)
        return 55;
}

console.log(fibonacci(7));