//write a method to replace all spaces with %20

const urlify = (str) => {
    str = str.split(' ');
    str = str.map((sub, i) => {
        if (i !== str.length - 1) {
            return sub + '%20';
        } else {
            return sub;
        }
    });
    return str.join('')
}

console.log(urlify('h e l l o') === 'h%20e%20l%20l%20o');
