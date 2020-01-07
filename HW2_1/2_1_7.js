var numberUser = prompt('Введите число');
if (numberUser === true) {
    alert('Спасибо, вы ввели все правильно!')
} else if (parseFloat(numberUser)) {
    alert('Так не нужно! Внимательно вводи числа!')
} else {
    alert('Введите число')
}