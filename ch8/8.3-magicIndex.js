const magicIndex = (array) => {
    //brute force - check check index + value
    //if no duplicates, if val > index, go left, if val < index, go right
    //if there are duplicates, scan the whole range of dups O(n)

    let left = 0;
    let right = array.length - 1;

    while ( left <= right ) {
        let mid = ( left + right ) >> 1;
        let ptr1 = mid;
        let ptr2 = mid;
        if (array[mid] === mid) {
            return mid;
        }
        while (array[ptr1 + 1] === array[mid]) {
            ptr1++;            
            if (array[ptr1] === ptr1) {
                return ptr1;
            }
        }
        while (array[ptr2 - 1] === array[mid]) {
            ptr2--;
            if (array[ptr2] === ptr2) {
                return ptr2;
            }
        }
        if (array[ptr1] > ptr1) {
            right = ptr2 - 1;
        } else {
            left = ptr1 + 1;
        }
    }

    return -1;
}

console.log(magicIndex([-1, 0, 1, 3]));
console.log(magicIndex([-1, 1, 3, 5, 7]));
console.log(magicIndex([1, 1, 1, 1, 1]));
console.log(magicIndex([1, 4, 4, 4, 5, 5]));