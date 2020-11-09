//1

var i;
for (i=0; i<10; i++){
    if (i % 2 == 0){
        alert (i);
    }
}



//1.2

function count(i){
    for (i=0; i<10; i++){
        if (i % 2 == 0){
            alert (i);
        }
    }
}

count(i);


//1.3 ()

var i, j;

do{
    j = +prompt ('До скольки считать?')
    while (true){
        if (!j);
    }
    break;
}

for (i=0; i<j; i++){
    if (i % 2 == 0){
        alert (i);
    }
}



//2

var obj = {
    name : '',
    passwpord : ''
};

alert (isEmpty (obj));

obj['password'] = '123';

function isEmpty (obj){
    for (let key in obj){
        return false;
    }
    return true;
}

//3

function sum(){
    var arr = [];

    while (true){
        var i = prompt ('Введите число');

        if (i === '' || i === null || !isFinite(i))break;
        arr.push(+i);
    }
    var k = 0;

    for (var j = 0; j < arr.length; j++) {
        k += arr[j];
    }
    return k;
}


alert (sum());