
// Расставьте в алфавитном порядке буквы. Разрешается использование техники Разделяй и властвуй. Полученные данные напечатайте.
// 👉👉👉  На вход строка: "poiuytrewqlkjhgfdsamnbvcxz"
// На выходе должно быть: ABCDEFGHIJKLMNOPQRSTUVWXYZ (с большой буквы)




function mergeSort(str){
    if(str.length < 2){
        return str;
    }


const middle = Math.floor(str.length / 2);
const left = str.slice(0, middle);
const right = str.slice(middle);
return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = '';
    

    while(left.length &&  right.length){
        if(left[0] <= right[0]){
            result +=left[0];
            left = left.slice(1);
        }else{
            result +=right[0];
            right = right.slice(1);
        }
    }
    return result + left+ right;
}
let str = "poiuytrewqlkjhgfdsamnbvcxz";
let sorted = mergeSort(str.toLowerCase()).toUpperCase();
console.log(sorted);





