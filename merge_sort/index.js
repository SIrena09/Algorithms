// 1. Есть список n элементов, которые представляют собой оценки студентов по математике. нужно отсортировать список в порядке убывания оценок с использованием алгоритма merge sort.


let arr = [3, 4, 2, 5, 1, 2, 4, 3, 5];

function merge(leftArr, rightArr){

    let result = [];
    
    while (leftArr.length && rightArr.length){
        if(leftArr[0] > rightArr[0]){
            result.push(leftArr.shift());
        }else{
            result.push(rightArr.shift());
           
        }
    }
return [...result, ...leftArr, ...rightArr];

}

function mergeSort(arr){
    if (arr.length === 1){
        return arr;

    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));

}
let sorteArr = mergeSort(arr);  
console.log(sorteArr);

//2. Дан  массив объектов с полями name и age нужно отсортировать массив по возрасту в порядке убывания, но возраст должен быть связан с именем.

let people = [
    {name: "Alice", age: "25"},
    {name: "Bob", age: "20"},
    {name: "Charly", age: "30"},
    {name: "David", age: "35"},
    { name: "Eva", age: "28"},
];
 
function mergeSort (array){
    if(array.length < 2)
    return array;



const middle = Math.floor(array.length / 2);
const left = array.slice(0, middle);
const right = array.slice(middle);

return  merge(mergeSort(left), mergeSort(right));

}

function merge (left, right){
let array = [];
let i = 0; 
let j = 0;

    while(i < left.length &&  j < right.length){
        if(left[i].age > right[j].age){
            array.push(left[i++]);
        }else{
            array.push(right[j++]);
        }
    }


    while(i < left.length){
        array.push(left[i++]);
    }


    while(j < right.length){
        array.push(right[j++]);
    }
    return array;
}

let sortPeople = mergeSort(people);
console.log(sortPeople);