//given a string, determine if it's one away based on edit distance
//insert / remove / add

const oneAway = (str1, str2) => {
    let ptr1 = 0;
    let ptr2 = 0;
    let strikes = 0;

    while (str1[ptr1] && str2[ptr2]) {
        if (strikes > 1) {
            return false;
        }
        if (str1[ptr1] !== str2[ptr2]) {
            strikes++;
            if (str1[ptr1 + 1] === str2[ptr2]) {
                str1++;
            } else if (str1[ptr1] === str2[ptr2 + 1]) {
                str2++;
            } else if (str1[ptr1 + 1] === str2[ptr2 + 1]) {
                str1++;
                str2++;
            }
        } else {
            str1++;
            str2++;
        }
    }

    return strikes < 1 ? true : false;
}

console.log(oneAway('aaron', 'aron') === true);
console.log(oneAway('aaron', 'ron') === false);
console.log(oneAway('asron', 'aaron') === true);