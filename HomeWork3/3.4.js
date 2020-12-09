var familyname, firstname, secondname, ageyear, ageday, ageyearplus, sex, sex1, p;

do{
    familyname = prompt ('Ваша фамилия');
}
while (!familyname);

do{
    firstname = prompt ('Ваше имя');
}
while (!firstname);

do{
    secondname = prompt ('Ваше отчество');
}
while (!secondname);

do{
    ageyear = +prompt ('Ваш возраст');
}
while (!ageyear && ageyear <= 0);

ageday = ageyear * 365;
ageyearplus = ageyear + 5;

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

alert ('ФИО:' +' ' +familyname +' ' +firstname +' ' +secondname
        +'\nВаш возраст в годах: ' +ageyear
        +'\nВаш возраст в днях: ' +ageday
        +'\nЧерез 5 лет Вам будет: ' +ageyearplus
        +'\nВаш пол: ' +sex1
        +'\nВы на пенсии: ' +p);