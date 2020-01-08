var str = 'Привет, Мир!';
var sum = 0;
for (j = 0; j < str.length; j++) {
    sum += str.charCodeAt(j)
}
alert('Сумма' + ' ' + sum);