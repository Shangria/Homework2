// Разберите пример


var age = +prompt("Сколько вам лет?", ""); // сохраним в переменную значение промт
// при условии, что возраст меньше 18 - выводим на экран школьник
if (age < 18 && age > 6) {  //добавила условие
    alert("школьник");
}
// при условии, что возраст меньше 0 - выводим на экран ты чё делаешь?
else if (age < 0) {
    alert('Ты чё делаешь?');
}
// при условии, что возраст больше 18 и меньше 30- выводим на экран молодежь
else if (age > 18 && age < 30) {
    alert("молодеж");
    // при условии, что возраст больше 30 и меньше 45 - выводим на экран зрелость
} else if (age > 30 && age < 45) {
    alert("зрелость");
    // при условии, что возраст больше 45 и меньше 60- выводим на экран закат
} else if (age > 45 && age < 60) {
    alert("закат");
    // при условии, что возраст больше 60 - выводим на экран как пенсия?
} else if (age > 60) {
    alert("как пенсия?");
}
// если все вышеперечисленное не подошло, выводим то ли киборг, то ли ошибка
else {
    alert("то ли киборг, то ли ошибка");
}

// Добавьте условие отрицательного возраста в пример выше. Расставьте недостающие (но синтаксически необязательные) фигурные скобки. Выкиньте лишнее из текущего кода