const perms = (string, i = 0, marked =[], substr = [], output = []) => {
    if (!string || !string.length) return null;

    if (substr.length === string.length) {
        output.push(substr.join(''));
        return;
    }

    for (let j = 0; j < string.length; j++) {
        if (!marked[j]) {
            marked[j] = true;
            substr.push(string[j]);
            perms(string, j, marked, substr, output);
            substr.pop();
            marked[j] = false;
        }
    }

    return output;
}

console.log(perms('abcd'));