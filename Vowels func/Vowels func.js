function Vowels(alphabet = 'абвгдеёжзийклмнопрстуфхцчшщьыъэюя'){

    var vowels = 'ауоыиэяюёе';
    var count = 0;

    for (var char of alphabet.toLowerCase()){
        if (vowels.includes(char)){
            count += 1;
        }
    }
    console.log (count);
}

Vowels();