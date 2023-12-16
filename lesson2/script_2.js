// var a = 2 + 2
// switch (a) {
//     case 3:
//         alert("Очень мало")
//         break;
//     case 4:
//         alert("Нормально")
//         break;
//     case 5:
//         alert("Очень много")
//         break;

//     default:
//         alert("Неизвестное значение")
//         break;
// }

var products = prompt('Введите цифру с продуктом:' +
                    '\n1 – картофель – 77 ккал;' +
                    '\n2 – салат – 20 ккал;' +
                    '\n3 – мясо – 242 ккал;' +
                    '\n4 – кукуруза – 123 ккал;' +
                    '\n5 – каша гречневая – 132 ккал.', 1);


var mass = prompt("Введите сколько вы сьели в граммах", 100)
// parseInt() функция для перевода в число
switch (parseInt(products)) {
    case 1:
        alert("Вы сьели " + (77 * mass) / 100 + ' калорий')
        break;
    case 2:
        alert("Вы сьели " + (20 * mass) / 100 + ' калорий')
        break;
    case 3:
        alert("Вы сьели " + (242 * mass) / 100 + ' калорий')
        break;
    case 4:
        alert("Вы сьели " + (123 * mass) / 100 + ' калорий')
        break;
    case 5:
        alert("Вы сьели " + (132 * mass) / 100 + ' калорий')
        break;
    
    default:
        alert("Вы сьели что-то не то)" )
        break;
}