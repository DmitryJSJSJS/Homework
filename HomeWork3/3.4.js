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