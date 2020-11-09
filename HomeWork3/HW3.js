//1

var login, password;

login = prompt ('Введите Ваш логин');

if (login === 'Админ'){

    password = prompt ('Введите Ваш пароль');

    if (password === 'Черный властелин'){
        alert ('Добро пожаловать');
    }
    else if (password === null){
        alert ('Вход отменён');
    }
    else{
        alert ('Пароль неверен');
    }
}
else if (login === null){
    alert ('Вход отменён');
}
else {
    alert ('Я вас не знаю');
}

//2

var message, login

login = prompt ('Введите Ваш логин');
message = (login === 'Вася')?'Привет':(login === 'Директор')?'Здравствуйте':'Нет логина';
alert (message);

//3

var styles = ['Джаз', 'Блюз'];
console.log (styles);
styles[styles.push] = ('Рок-н-ролл');
console.log (styles);
styles[styles.length -1] = ("Классика");
console.log (styles);
alert = (styles.shift());
console.log (styles);
styles.unshift ('Реп', 'Регги');
console.log (styles);

//4

var familyname, firstname, secondname, ageyear, ageday, ageyearplus, sex, sex1, p;

do{
    familyname = prompt ('Ваша фамилия');
}
while (familyname === null);
if (familyname === null){
    familyname === undefined;
}
familyname = ('Некорректный ввод');

do{
    firstname = prompt ('Ваш имя');
}
while (firstname === null);
if (firstname === null){
    firstnamename === undefined;
}
familyname = ('Некорректный ввод');

do{
    secondname = prompt ('Ваше отчество');
}
while (secondname === null);
if (secondname === null){
    secondname === undefined;
}
familyname = ('Некорректный ввод');

do{
    ageyear = +prompt ('Ваш возраст');
}
while (ageyear <= 0);
if (ageyear/ageyear !== 1){
    ageyear = ('Некорректный ввод');
}
if (ageyear/ageyear !== 1){
    ageday = ageyear * 365;
    ageyearplus = ageyear + 5;
}
ageday = ('Некорректный ввод');
ageyearplus = ('Некорректный ввод');

sex = confirm ('Ваш пол - мужской?');

if (sex === true ){
    sex1 = ('Мужской')
}
else if (sex === false){
    sex1 = ('Женский')
}

if (sex === true && ageyear < 63){
    p = ('Нет')
}
else if (sex === true && ageyear >= 63){
    p = ('Да')
}
else if (sex === false && ageyear < 58){
    p = ('Нет')
}
else if (sex === false && ageyear >= 58){
    p = ('Да')
}
else p = ('Неизвестно из-за некорректного ввода');

alert ('ФИО:' +' ' +familyname +' ' +firstname +' ' +secondname +' ' +'Ваш возраст в годах:' +' ' +ageyear +' ' +'Ваш возраст в днях:' +' ' +ageday +' ' +'Через 5 лет Вам будет:' +' ' +ageyearplus +' ' +'Ваш пол:' +' ' +sex1 +' ' +'Вы на пенсии: ' +p);