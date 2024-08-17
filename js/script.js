console.group('about');
    console.log('nick: artuma');
    console.log('city: Ufa');

    console.group('items');
        console.log('python');
        console.log('javascript');
        console.log('sql');
    console.groupEnd();
console.groupEnd();


/*
let n = 0;
let q = 0;

let a = 30,
    b = 18;
//algorithm euclid
//большее число делим на меньшее.
//если делится без остатка, то меньшее число и есть НОД (следует выйти из цикла).
//если есть остаток, то большее число заменяем на остаток от деления.
//переходим к пункту 1.
while (a != 0 & b != 0){
    if(a > b){//если а больше б, то а присваиваем а/б
        a = a%b;
    }else{
        b = b%a;//наоборот
    }
}

console.log(a+b);*/