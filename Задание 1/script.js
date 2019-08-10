let money = prompt('Ваш бюджет на месяц', '100000$'),
    year = prompt('Введите год', '1994'),
    month = prompt('Введите месяц', '03'),
    day = prompt('Введите день', '18');

    time = '('+year+'-'+month+'-'+day+')';

    
t = parseInt(time);



time = year+'-'+month+'-'+day;

let appData = {
budget : money,
timeDate : time,
expenses : {},
optionalExpenses : {},
income : [],
saving : false
}
let a1 =  prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Во сколько обойдется?', ''), 
    a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a4 = prompt('Во сколько обойдется?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);


console.log(money);
console.log(time);


/*
let num = 39;
switch(num){
    case num < 49:
        console.log('Malo');
        break;
    case num > 100:
        conaole.log('Mnogo');
        break;
    case 50:
        console.log('Zaebis');
        break;
    default:
        console.log('Ne tak');
        break;
}
*/


