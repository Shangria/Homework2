// Сделайте калькулятор, который позволит вам исходя из информации о количества этажей в доме и количества квартир на этаже
// // // находить подъезд и этаж определенной квартиры по её номеру. Например для 9этажного дома по 4 квартиры на этаж 81 квартира находится на 3м этаже третьего подъезда.

var floorsCount = prompt('введите количество этажей в дому');
var flatsPerFloorCount = prompt('введите количество квартир на этаже');
var floorNumber = prompt('введите номер квартиры');
// количество квартир в подъезде
var floorsPerPorch = floorsCount * flatsPerFloorCount;
var porch;
var floor;
porch = floorNumber / floorsPerPorch;
if (String(porch).indexOf('.') !== -1) {
    porch = Math.ceil(porch);
}
// номер квартиры в конкретном по в подъезде
// т.е. к примеру количество этажей - 9 и количество квартир на этаже - 4, т.е. количевство квартир в подъезде - 36
// кв 1 будет на 1м этаже в 1м подьезде - это 1я квартира в подъезде (и 1я в доме)
// кв 37 будет на 1м этаже во 2м подьезде - это 1я квартира в подъезде (и 37я в доме)
// кв 39 будет на 1м этаже во 2м подьезде - это 3я квартира в подъезде (и 39я в доме)
var floorNumberInCurrentPorch = floorNumber - (porch - 1) * floorsPerPorch;
floor = floorNumberInCurrentPorch / flatsPerFloorCount;
if (String(floor).indexOf('.') !== -1) {
    floor = Math.ceil(floor);
}
alert('подъезд ' + porch + ', этаж: ' + floor);

