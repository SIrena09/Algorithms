// Напишите рекурсивный метод, который выводит на экран числа Фибоначчи до N-ого элемента.


function fib(n){
    return(n <=1)? n : fib(n-1) + fib(n-2);
}
console.log(fib(5));
console.log(fib(9));
console.log(fib(11));

// Напишите рекурсивный метод, который проверяет, является ли строка палиндромом.


function palindrom(str) {
    str = str.toLowerCase;
    return str === str.split('').reverse().join('');
}

console.log(palindrom('Anna'));
console.log(palindrom('level'));
console.log(palindrom('qwerewq'));
console.log(palindrom('234'));


// Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


function powerOfTwo(N){
  
    if(N < 1){
        return 'NO';
    }
    
    return (N & (N - 1)) === 0 ? 'YES': 'NO';

}
console.log(powerOfTwo(8));
console.log(powerOfTwo(3));
console.log(powerOfTwo(32));
console.log(powerOfTwo(5));

// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).

function sumOfNumber(N){
    if( N === 0){
        return 0;
    }else{
        return (N % 10) + (sumOfNumber(Math.floor(N/10)));
    }

}
console.log(sumOfNumber(179));
console.log(sumOfNumber(985));
console.log(sumOfNumber(567));


