const date = new Date();
const week = date.toLocaleString('ru', { weekday: 'long' });
const time = date.toLocaleTimeString('en');
const dateNewYear = new Date(2023, 0, 1).getTime();
let dateNow = new Date().getTime();
let timeRemaining = Math.floor(((dateNewYear - dateNow) / 1000) / 60 / 60 / 24);

if (date.getHours() > 6 && date.getHours() < 12) {
    console.log('Доброе утро!');
} else if (date.getHours() >= 12 && date.getHours() < 18) {
    console.log('Добрый день!');
} else if (date.getHours() >= 18 && date.getHours() <= 23) {
    console.log('Добрый вечер!');
} else if (date.getHours() >= 0 && date.getHours() <= 6) {
    console.log('Доброй ночи!');
}

console.log(`Сегодня: ${week}`);
console.log(`Текущее время: ${time}`);
console.log(`До нового года осталось дней: ${timeRemaining}`);
