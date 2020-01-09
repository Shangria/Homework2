var calcTime;
var time;
var whatTime = prompt('Что посчитать? Введите число и символ:' +
    'h - что бы посчтитать кол-во сек. в часах,' +
    'd - кол-во сек. в днях, ' +
    'w- кол-во сек. в неделях, ' +
    'm - кол-во сек. в месяцах ');

if (whatTime.slice(-1) === "h") {
    time = parseInt(whatTime);
    calcTime = time * 3600;
    alert('Кол-во секунд в' + ' ' + time + ' ' + 'часах/часе' + ':' + ' ' + calcTime)
}
if (whatTime.slice(-1) === 'd') {
    time = parseInt(whatTime);
    calcTime = time * 60 * 60 * 24;
    alert('Кол-во секунд в' + ' ' + time + ' ' + 'днях/дне' + ':' + ' ' + calcTime)
}
if (whatTime.slice(-1) === 'w') {
    time = parseInt(whatTime);
    calcTime = time * 60 * 60 * 24 * 7;
    alert('Кол-во секунд в' + ' ' + time + ' ' + 'неделях/неделе' + ':' + ' ' + calcTime)
}
if (whatTime.slice(-1) === 'm') {
    time = parseInt(whatTime);
    calcTime = time * 60 * 60 * 24 * 30;
    alert('Кол-во секунд в' + ' ' + time + ' ' + 'месяцах/месяце' + ':' + ' ' + calcTime)
}