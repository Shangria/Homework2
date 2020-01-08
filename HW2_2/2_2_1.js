var input = prompt('введите число');
var maxValue = parseFloat(input);

var isInputCorrect = false;
if (isNaN(maxValue)) {
    alert('Введите цифру');
} else if (maxValue < 0) {
    alert('Введите число больше 0');
} else {
    isInputCorrect = true;
}

var result = 0;
if (isInputCorrect) {
    for (var j = 0; j <= maxValue; j++) {
        if (j % 2 != 0) {
            result += j;
        }
    }
    alert('Сумма' + ' ' + maxValue + result);
}
