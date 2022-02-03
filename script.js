const title = "myRepo";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 666;
const rollback = 99;
const fullPrice = 100500;
const adaptive = true;
const screenStr = "Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани";

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.lenght);
console.log(screenStr);
console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));