fibonacci = function(enesimo) {
    let atual = 1;
    let anterior = 1;
    let fibonacci;
    if(enesimo == 1)
        return 1;
    if(enesimo == 2)
        return 1;
    for(i = 3; i<= enesimo; i++){
        fibonacci = atual + anterior;
        anterior = atual;
        atual = fibonacci;
    }
    return fibonacci;
}

console.log(fibonacci(7));