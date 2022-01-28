const title = 'Урок 2';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 9;
let rollback = 50;
let fullPrice = 100;
let adaptive = false;

console.log('Типы данных: \n title - ' + typeof(title) + ',\n fullPrice - ' + typeof(fullPrice) + ',\n adaptive - ' + typeof(adaptive) + '.' );
console.log('Длина строки: ' + screens.length + '.');
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
console.log(screens.toLowerCase().split(', '));
console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback/100)));