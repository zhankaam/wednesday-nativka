console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

/*
function sum(n: number){
   return function(n2: number){
       return n + n2
   }
}

console.log(sum(3)(6))
*/

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

/*
function makeCounter(){
    let count = 0
    return function(){
        return ++count;
    }
}
const counter = makeCounter()
console.log(counter())
console.log(counter())
const counter2 = makeCounter()
console.log(counter2())
console.log(counter())
*/



// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

/*
function makeCounter(n: number){
    let count = n
    return {
        increase: () => ++count,
        decrease: () => --count,
        reset () {
            count = 0
            return count
        },
        set: (num: number) => {
            count = num;
            return count
        }
    }
}

let counter = makeCounter(10)
console.log(counter.increase())
console.log(counter.reset())
*/


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
/*

function superSum(n: number){
    if(n === 0) return 0;
    if(n === 1) return (num: number) => num

    let _arguments: number[] = []

    function helper(...args: number[]){
        _arguments = [..._arguments, ...args]
        if(_arguments.length >= n){
            return _arguments.reduce((acc,number) => acc + number)
        } else {
            return helper;
        }
    }
    return helper
}
(() => {
const start = Date.now()
    //@ts-ignore
let a = superSum(10)(5,6,8)(2,9)(5)(6)(7)(9)(10)
const end = Date.now()
console.log(a)
console.log('result',end - start)
})()

*/


// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

/*sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050*/
// хвостовая рекурсия
/*function sumTo(n: number,acc:number): number{
 if(n === 1) return n + acc;
 return sumTo(n - 1, acc + n)
}

console.log(sumTo(3,0))*/

// рекурсия

/*function sumTo(n: number): number{
    if(n === 1) return n;
    return n + sumTo(n - 1)
}
console.log(sumTo(3))*/

// решения через цикл
/*
function sumTo(x: number,n: number){
    let result = 1;
    for(i = 0; i < n; i++){
        result += x
    }
    return result
}

console.log(100)
*/
//С использованием формулы арифметической прогрессии.
//Решение по формуле: sumTo(n) = n*(n+1)/2
/*
function sumTo(n: number) {
    return n * (n + 1) / 2;
}
*/

// LearnJS task 2
//n! = n * (n - 1) * (n - 2) * ...*1
/*
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
*/

/*function factorial(n: number): number{
    return (n === 1) ?  1 : n * factorial(n - 1)
}

console.log(factorial(5))*/

//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи
/*
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77))
*/
/*function fib(n: number): number{
    return (n === 1) ? 1 : fib(n - 1) + fib(n - 2)
}*/
// Напишите функцию printList(list), которая выводит элементы списка по одному.

/*function printList(list){
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
    let temp = list

    while(temp){
        alert(temp.value)
        temp = temp.next
    }
}*/
// Решение через рекурсию
/*
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {

    alert(list.value); // выводим текущий элемент

    if (list.next) {
        printList(list.next); // делаем то же самое для остальной части списка
    }

}

printList(list);
*/

//Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
//С использованием рекурсии
/*let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    alert(list.value);
}

printReverseList(list);*/
//С использованием цикла
/*let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] );
    }
}

printReverseList(list);*/
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.



// just a plug
export default () => {};