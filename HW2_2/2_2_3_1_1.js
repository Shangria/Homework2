var whatTimeIsItNow;
debugger;
while (isNaN(whatTimeIsItNow)) {
    whatTimeIsItNow = Number(prompt('введите количество часов'))
}
var howManySeconds = whatTimeIsItNow * 3600;
alert('В' + ' ' + whatTimeIsItNow + ' ' + 'часе/часах' + ' ' + howManySeconds + ' ' + 'секунд');

