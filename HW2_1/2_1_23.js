// Сделайте калькулятор, который позволит вам исходя из информации о количества этажей в доме и количества квартир на этаже
// // // находить подъезд и этаж определенной квартиры по её номеру. Например для 9этажного дома по 4 квартиры на этаж 81 квартира находится на 3м этаже третьего подъезда.


var storeys = prompt('кол-во этажей');
var apartment = prompt(' номер кв.');
var apartmentsStorey = prompt('кол-во квартир на этаже');
var appatmrntsInPorch = storeys * apartmentsStorey;
var porch = Math.floor(((apartment - 1) / appatmrntsInPorch) + 1);
var porchRem = String(((apartment - 1) / appatmrntsInPorch) + 1).split(".")[1].substr(0, 1);
var numberStore = Math.round(porchRem / apartmentsStorey + 1);

alert(porch + ' ' + 'подьезд' + ' ' + numberStore + ' ' + 'этаж');