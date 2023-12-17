// let tasks = [];
// let tasks = ["сделать уроки", "сходить в магазин", "прибраться в комнате"];
// console.log(tasks)

// alert(tasks[0])
// alert(tasks[1])
// alert(tasks[2])
// alert(tasks[3]) // пустой обьект

// tasks[1] = "Выучить js"  // изменяю 1 индекс
// console.log(tasks)

// // добавление в конец массива
// tasks.push("купить шоколад")
// console.log(tasks)


// // добавление в конец массива
// tasks.unshift("поспать")
// console.log(tasks)

// // удаление последнего элемента
// tasks.pop()
// console.log(tasks)

// // удаление первого элемента
// tasks.shift()
// console.log(tasks)


// let game = ['RPG', 'Action', 'Стратегии', 'Шутеры', 'Гонки']

// game.unshift("MMORPG")
// game.push("Симуляторы")
// alert(game)
// alert(game[1], game[3])
// game[5] = "MOBA"
// alert(game)

// p1 = ['молоко', 100, 25]
// p2 = ['бананы', 250, 30]
// p3 = ['макароны', 150,20 ]


// alert(
//     p1[1] + p1[2] + p2[1] + p2[2] + p3[1] + p3[2] 
// )

// создал функцию
// function showMessage(message) {
//     name1 = prompt("Как тебя зовут?")
//     alert("Привет " + name1 + " !" + message)
// }

// // вызов функции
// showMessage("Как настроение?")

// showMessage("Как себя чувствуешь?")

// возвращающая функция
// function calc(a, b) {
//     return a * b 
// }

// var test = calc(1,2) // результат функции записываю в перменную test 
// console.log(test)





// function calc(a, b, c) {
//     return (a + b + c) / 3 
// }

// var mean = calc(10, 20, 15) // результат функции записываю в перменную test 
// console.log(mean)





// local global
var userName = "Павел" //global

function showMessage() {
    var userName = "Иван" //local

    var message = "Привет ) "
    console.log(message + userName) // доступ есть
}


showMessage()
console.log(userName)// доступ есть















