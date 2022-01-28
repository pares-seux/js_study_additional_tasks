const title = 'Урок 2';
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 9;
const rollback = 50;
const fullPrice = 100;
const adaptive = false;

console.log('Типы данных: \n title - ' + typeof(title) + ',\n fullPrice - ' + typeof(fullPrice) + ',\n adaptive - ' + typeof(adaptive) + '.' );
console.log('Длина строки: ' + screens.length + '.');
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
console.log(screens.toLowerCase().split(', '));
console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback/100)));