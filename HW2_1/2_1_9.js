var enteredText = prompt('Введите Вашу любимую цитату, используя словосочетание моя цитата, неиспользуя слово трамвай, волна ');
debugger;
if (enteredText.includes('моя цитата')) {
    alert('Спасибо, все верно!')
} else if (enteredText.includes('трамвай')) {
    alert('Ну попросила ж не использовать!')
} else if (enteredText.includes('волна')) {
    alert('Ну попросила ж не использовать!')
} else {
    alert("Вы не выполнили то, что от Вас требовалось!")
}
