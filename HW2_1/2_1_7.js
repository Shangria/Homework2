var numberUser = prompt('Введите целое число');

if (parseInt(numberUser) || parseFloat(numberUser)) {
    alert('Спасибо!')
} else {
    alert('Так не нужно! Внимательно вводи числа!')
}