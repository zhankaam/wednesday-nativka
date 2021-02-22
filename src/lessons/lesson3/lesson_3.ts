console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

let prom: Promise<number> = new Promise((resolve,reject) => {
    //any
    //async
   /* resolve(); // good
    reject()   // bad*/
})
// Promise methods:
// then - обработка положительных исходов,
// catch - перехватывает негативные исходы,
// finally - не обработывает никакие исходы[чтоб отключить крутелку], то есть он для выполнения side effect-ов;
console.log(prom)

prom.then((res: number) => {
    console.log('resolve', res);
    // one more async request
    // return result
    return res + 5;
}, (rej) => {
    console.log('reject', rej)
    return rej + 2;
})
    .then((res2) => {
        console.log('then2',res2)
    }, (rej2) => {})




// just a plug
export default ()=>{};