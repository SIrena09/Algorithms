// 1.  динамичеcкое увеличение массива. Нужна функция, которая примет массив и число эелементов и возвращает новый массив который сожержит все элементы исходного массива и заданное число  новых элементов. 

function extendArray(array, num, value) {
    let newArray = [...array];
    for (let i = 0; i < num; i++) {
        newArray.push(value);
    }
    return newArray;
}

let arr = [1, 2, 3, 4, 5];
let num = 4;
let value = 'new';
let newArr = extendArray(arr, num, value);
console.log(newArr);

// 2. пример использования амортизированного анализа на практике.

/*  В реальной жизни амортизированный анализ используется во многих областях, где требуется эффективное управление ресурсами. Например: системном анализе, сетевом планировании и даже в финансах.
Системный анализ: для определения требований к производительности и масштабируемости системы. Это может помочь в принятии решений о выборе аппаратного обеспечения или дизайне системы.

Сетевое планирование:  для определения требований к пропускной способности сети или для планирования расширения сети.

Финансы:  для расчета средней стоимости вложений или затрат на протяжении определенного периода времени.*/