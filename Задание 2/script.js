/*
let num = 93;
switch (true) {
    case num <= 49:
        console.log("Неверно!");
        break;
    case num >= 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Все еще много!");
        break; 
    case num == 50:
        console.log("Вthyj");
        break; 
    default:
        console.log("Чтото не так!")
        break;
}
(num == 50) ? console.log('Верно') : console.log('Неверно');

console.log(console);
*/
/*
let num = 49;
while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}while (num < 50);

for( let i = 1; i < 8; i++ ){
    if (i == 6){
       // break;
       continue;
    }
    console.log(i)
}
*/
'use strict';


let money,
    time;

function start(){
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    while(isNaN(money) || money == null || money == ''){
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
}

start();

    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }
    
    }
}

chooseExpenses();




// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);



function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}

detectDayBudget();

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}

detectLevel();



function chooseOptExpenses(){
    let r = 1;
    while(r < 4){
        let c = prompt('Статья необязательных расходов', ''); 
        
        if (typeof(c) === "string" != null ){
            appData.optionalExpenses[r] = c;
            console.log('ok');
            
        }else{
            console.log('bad');
            r--;
        }
        r++;
    }
}

chooseOptExpenses();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt('Сколько денег на депозите', ''),
            percent = +prompt('Под какой процент?', '');
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
    
}
checkSavings();