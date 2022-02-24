const body = document.querySelector('body');
for (let i = 1; i < 5; i++) {
    const p = document.createElement('p');
    body.append(p);
}
const p = body.querySelectorAll('p');
const date = new Date();
const week = date.toLocaleString('ru', { weekday: 'long' });
const time = date.toLocaleTimeString('en');
const dateNewYear = new Date(2023, 0, 1).getTime();
let dateNow = new Date().getTime();
let timeRemaining = Math.floor(((dateNewYear - dateNow) / 1000) / 60 / 60 / 24);

if (date.getHours() > 6 && date.getHours() < 12) {
    p[0].append('Доброе утро!');
} else if (date.getHours() >= 12 && date.getHours() < 18) {
    p[0].append('Добрый день!');
} else if (date.getHours() >= 18 && date.getHours() <= 23) {
    p[0].append('Добрый вечер!');
} else if (date.getHours() >= 0 && date.getHours() <= 6) {
    p[0].append('Доброй ночи!');
}

p[1].append(`Сегодня: ${week}\n`);
p[2].append(`Текущее время: ${time}`);
p[3].append(`До нового года осталось дней: ${timeRemaining}`);
