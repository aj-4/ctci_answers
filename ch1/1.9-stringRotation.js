const strRotation = (str1, str2) => {
    let inf = str2.indexOf(str1[0]);
    let st = str2.slice(inf);
    let f = st + str2.slice(0, inf);

    return f === str1;
}

console.log(strRotation('ronaa', 'aaron') === true);
console.log(strRotation('rofnaa', 'faaron') === false);