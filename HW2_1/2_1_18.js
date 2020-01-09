// Поменяйте значения свойств в ваших объектах, используя [] и . и присвоения.


var pencilCase = {
    pencil: 'gray',
    pen: 'red',
    straightedge: 'green'
};

var foodBasket = {
    apples: 3,
    oranges: 2,
    pears: 5
};
pencilCase.pen = 3;
pencilCase['pencil'] = 2;
foodBasket.apples = 'gray';
foodBasket['pears'] = 'red';

console.log(pencilCase.pen);
console.log(pencilCase['pencil']);
console.log(foodBasket.apples);
console.log(foodBasket['pears']);
