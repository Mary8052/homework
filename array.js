// 1. Масиви та об'єкти:
//    1) Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль.
let arr=[1, 2.2, "three", 4, 5, 6, 7, "вісім", 9, 10];
console.log(arr)
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//    2) Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "ROSEMARY AND RUE",
    pageCount: 555,
    genre: "fantastic"
}
let book2 = {
    title: "LOVE AND MONSTERS",
    pageCount: 545,
    genre: "fantastic"
}
let book3 = {
    title: "CHARLIE AND THE CHOCOLATE FACTORY",
    pageCount: 565,
    genre: "fantastic"
}
console.log(book1, book2, book3)

//    3) Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name
//    та age.
let book4 = {
    title: "ROSEMARY AND RUE",
    pageCount: 555,
    genre: "fantastic",
    authors: [ {
        name: "name1",
        age: 31
    }
    ]
}
let book5 = {
    title: "LOVE AND MONSTERS",
    pageCount: 545,
    genre: "fantastic",
    authors: [{
        name: "name2",
        age: 32
    }
    ]
}
let book6 = {
    title: "CHARLIE AND THE CHOCOLATE FACTORY",
    pageCount: 565,
    genre: "fantastic",
    authors: [{
        name: "name3",
        age: 33
    }
    ]
}
console.log(book4, book5, book6)

//    4) Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users=[
    {name: "name1", username: "username1", password: "password1"},
    {name: "name2", username: "username2", password: "password2"},
    {name: "name3", username: "username3", password: "password3"},
    {name: "name4", username: "username4", password: "password4"},
    {name: "name5", username: "username5", password: "password5"},
    {name: "name6", username: "username6", password: "password6"},
    {name: "name7", username: "username7", password: "password7"},
    {name: "name8", username: "username8", password: "password8"},
    {name: "name9", username: "username9", password: "password9"},
    {name: "name10", username: "username10", password: "password10"}
]
console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password, users[5].password, users[6].password, users[7].password, users[8].password, users[9].password)

// 2. Логічні розгалуження:
//    1) Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт
//    при a, що дорівнює 1, 0, -3

//    2) Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или
//    четверту частину години).
//    3) У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//    4) Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей
//    день (можна замість плану на день, назву дня англійською).
//    5) Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно врахувати коли введені рівні числа.
//
//3. Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомоги  оператора || буде
//    присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//4. З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//    У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"./