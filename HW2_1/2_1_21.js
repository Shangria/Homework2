// Подумайте о том, как можно применить объекты к предыдущем заданию.
var size = {
    rusS: 40,
    rusM: 42,
    rusL: 46,
    rusXL: 50
};
var calcSize;
var ourSize = prompt('Введите Ваш размер по американской системе. Тоесть: S,M,L,XL');

if (ourSize.slice(0) == "S") {
    calcSize = size.rusS - 34;
    alert('Ваш размер США ' + calcSize)
}
if (ourSize.slice(0) == "M") {
    calcSize = size.rusM - 34;
    alert('Ваш размер США ' + calcSize)
}
if (ourSize.slice(0) == "L") {
    calcSize = size.rusL - 34;
    alert('Ваш размер США ' + calcSize)
}
if (ourSize.slice(0) == "XL") {
    calcSize = size.rusXL - 34;
    alert('Ваш размер США ' + calcSize)
}
