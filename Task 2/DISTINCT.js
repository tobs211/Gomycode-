
function distinct(arr1, arr2) {
    
    let sum = 0;

        for(let item of arr2) {
            if(!arr1.includes(item)) {
                sum += item;
            }
        }
        for(let item of arr1) {
            if(!arr2.includes(item)) {
                sum += item;
            }
        }

    return sum;
}

console.log(distinct([3, 1, 7, 9], [2, 4, 1, 9, 3]))