// Найдите те или иные реальные объекты и найдите их свойства. Например у маркера это цвет, толщина, уровень зарядки (количество краски),
// у автомобиля - бренд, модель, мощность двигателя, цвет и так далее. Создайте объекты с помощью {}.
// В качестве образца посмотрите объект персоны из материала предыдущего занятия


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
console.log(pencilCase.pen);
console.log(pencilCase['pencil']);
console.log(foodBasket.apples);
console.log(foodBasket['pears']);
