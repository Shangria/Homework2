var str = 'abcde';
for (var j = 0; j < str.length; j++) {
    var letter = str.charAt(j);
    if (letter == 'a' || letter == 'b' || letter == 'c') {
        console.log('i now this letter \'' + letter + '\'')
    }
}