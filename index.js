// Задача 1. Разработайте функцию,
// которая принимает целое число в качестве аргумента и
// возвращает строку, содержащую это число и слово "компьютер" в
// нужном склонении по падежам в зависимости от числа. Например, при вводе числа
// 25 функция должна возвращать "25 компьютеров", для числа 41 — "41 компьютер",
// а для числа 1048 — "1048 компьютеров".
function makeEnding(a) {

    const arrExceptionDozens = [12, 13, 14];
    const numbers = [2, 3, 4];
    if (typeof a !== "number" || a < 0) {
        console.log('некорректное значение');
        return;
    }
    if (numbers.includes(a % 10) && !arrExceptionDozens.includes(a % 100)) {
        return `${a} компьютера`;
    } else if (a % 10 === 1 && a % 100 !== 11) {
        return `${a} компьютер`;
    } else {
        return `${a} компьютеров`;
    }
}


// Задача 2. Написать функцию/метод,
// которая на вход получает массив положительных целых чисел произвольной длины.
// Например [42, 12, 18]. На выходе возвращает массив чисел, которые являются
// общими делителями для всех указанных числе. В примере это будет [2, 3, 6].

function searchDivisors(arr) {
    arr.sort(function (a, b) {
        return b - a;
    });
    arrDivisors = [];
    arrResult = [];
    let counter = 1;
    for (const arrKey in arr) {
        for (let i = 0; i < arr[arrKey]; i++)
            if (arr[arrKey] % i === 0 && i !== 0 && i !== 1) {
                arrDivisors.push(i);
            }
    }
    arrDivisors.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < arrDivisors.length; i++) {
        if (arrDivisors[i] === arrDivisors[i + 1]) {
            counter++
            if (counter === arr.length - 1) {
                arrResult.push(arrDivisors[i]);
            }

        } else if (arrDivisors[i] !== arrDivisors[i + 1]) {
            counter = 0;
        }

    }
    return arrResult
}


// Задача 3. Написать функцию/метод, которая возвращает массив простых чисел в диапазоне
// (2 числа - минимальное и максимальное) заданных чисел.
// Например, на вход переданы 2 числа: от 11 до 20
// (диапазон считается включая граничные значения).
// На выходе программа должна выдать [11, 13 , 17, 19]
function rangeNumbers(a, b) {
    numb1 = a;
    numb2 = b;
    arrVal =[];
    for (let i = numb1; i < numb2; i++){
        let isValid = true;
        for (let j = 2; j < i; j++){
            if( i % j ===0){
                isValid = false;
                break;
            }
        }
        if(isValid){
            arrVal.push(i);
        }
    }
    return arrVal;
}


// Задача 4. Написать метод, который в
// консоль выводит таблицу умножения. На вход метод получает число,
// до которого выводит таблицу умножения. В консоли должна появиться таблица.
// Например, если на вход пришло число 5, то получим:
function getTable(a) {
    const arrNumbs = [];
    let count = 0;
    let str = '';
    let nextStr = ''
    while (count < a) {
        count++;
        arrNumbs.push(count);
    }
    for (let i = 0; i < arrNumbs.length; i++) {
        if (i === 0) {
            str += '*  ';
        }
        str += arrNumbs[i] + '  ';
    }
    console.log(str);
    count = 0;
    for (let i = 0; i < arrNumbs.length; i++) {
        count++;
        nextStr += (i + 1) + '  ';
        for (let j = 0; j < arrNumbs.length; j++) {
            if ((j + 1) * count < 10) {
                nextStr += (j + 1) * count + '  '
            }
            if ((j + 1) * count >= 10) {
                nextStr += (j + 1) * count + ' '
            }
        }
        console.log(nextStr);
        nextStr = '';
    }

}

console.log(makeEnding(5)); //проверка первого задания
console.log(searchDivisors([42, 12, 18]));//проверка второго задания
console.log(rangeNumbers(11, 20));//проверка третьего задания
getTable(7) //проверка четвертого задания