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
let num = 49;
/*while (num < 55) {
    console.log(num);
    num++;
}
*/
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