//1

function pow (x, n, i = 0, result = 0){

    while (true){
        x = +prompt('Введите X:');
        if (!x){
            alert = ('Целое число');
        }
        else break;
    }

    while (true){
        n = +prompt('Введите N:');
        if (!n){
            alert = ('Целое число');
        }
        else break;
    }

    result = x;
    for (i = 1; i < n; i++){
        result *= x;
    }
    return result;
}
alert (pow(result));



//2

function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
alert( sumTo(100) );
// Цикл являтся более оптимальным решением по отношению к рекурсии, но мение оптимальным по отношению к формуле

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}
alert( sumTo(100) );
// Самое медленное решение всвязи с затратами ресурсов на рекурсивные вычисления

function sumTo(n) {
    return n * (n + 1) / 2;
}
alert( sumTo(100) );
// По формуле самое быстрое решение так как задействует только одну строку кода

// Из-за ограничения глубины вложенных вызовов нельзя вызвать sumTo(100000)


//3

function treeSum(arr){
    var sum = 0;

    for (var i = 0; i < arr.length; i++){
        var value = arr[i];
        if (typeof value === 'number' && (!isNaN(value))){
            sum =+ value;
        }
        else if (typeof value === 'object' && value && value.length){
            sum =+ treeSum(value);
        }
    }
    return sum;
}

treeSum ([ 5, 7,
        [4, [2], 8,
        [1, 3], 2],
        [9, []],
        1, 8 ]);

