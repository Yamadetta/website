let firstTime = {
    hrs:+'',
    min:+'',
    sec:+''

};

let secondTime = {
    hrs:+'',
    min:+'',
    sec:+''
};

let result;

let words = {
    hours: '',
    minutes: '',
    seconds: ''
};

document.getElementById("calculate").onclick = function() {
    writeValue();
    if (convertHrsToSec(firstTime.hrs,firstTime.min,firstTime.sec)<convertHrsToSec(secondTime.hrs,secondTime.min,secondTime.sec)) {
        result = convertSecToHrs(convertHrsToSec(secondTime.hrs,secondTime.min,secondTime.sec) - convertHrsToSec(firstTime.hrs,firstTime.min,firstTime.sec));
        } else {
            result = convertSecToHrs(86400-convertHrsToSec(firstTime.hrs,firstTime.min,firstTime.sec) + convertHrsToSec(secondTime.hrs,secondTime.min,secondTime.sec));
        }

    
    
    wordsForm();

    if (
        (firstTime.hrs == 0 && firstTime.min == 0 && firstTime.sec == 0) || (secondTime.hrs == 0 && secondTime.min == 0 && secondTime.sec == 0)
        )
        {
            document.getElementById('result').innerHTML = 'Вы ввели не все значения';
        } else {
            document.getElementById('result').innerHTML = `${result.hrs} ${words.hours} ${result.min} ${words.minutes} ${result.sec} ${words.seconds}`; 
        
        }
        

};


/* ФУНКЦИИ
=====================================*/

// Конвертация часов в секунды
function convertHrsToSec (hrs, min, sec) {
    return (hrs*3600) + (min*60) + sec;
}

// Конвертация секунд в часы
function convertSecToHrs (sec) {
    let min = Math.floor(sec/60);
    sec = sec - (min*60);
    let hrs = Math.floor(min/60);
    min = min - (hrs*60);
    let result = {
        hrs, min, sec
    };
    return result;
}

// Запись значений
function writeValue() {
    firstTime = {
        hrs: +document.getElementById("firstTime.hrs").value,
        min: +document.getElementById("firstTime.min").value,
        sec: +document.getElementById("firstTime.sec").value
    };
    secondTime = {
        hrs: +document.getElementById("secondTime.hrs").value,
        min: +document.getElementById("secondTime.min").value,
        sec: +document.getElementById("secondTime.sec").value
    };
}


// Перевод слов
function wordsForm  () {
    // Часы
        if (result.hrs == 1 || result.hrs == 21) {
            words.hours = 'час';
        } else {
            words.hours = 'часов';
        }
        if ((result.hrs >= 2 && result.hrs <= 4) || (result.hrs >= 22 && result.hrs <= 24)) { words.hours = 'часа';
        } 
    // ./Часы
    // Минуты
        if (result.min == 1 || result.min == 21 || result.min == 31 || result.min == 41 || result.min == 51) {
            words.minutes = 'минута';
        } else {
            words.minutes = 'минут';
        }
        if ((result.min >= 2 && result.min <= 4) || (result.min >= 22 && result.min <= 24) || (result.min >= 32 && result.min <= 34) || (result.min >= 42 && result.min <= 44) || (result.min >= 52 && result.min <= 54)) { words.minutes = 'минуты';
        }
    // ./Минуты
    // Секунды
        if (result.sec == 1 || result.sec == 21 || result.sec == 31 || result.sec == 41 || result.sec == 51) {
            words.seconds = 'секунда';
        } else {
            words.seconds = 'секунд';
        }
        if ((result.sec >= 2 && result.sec <= 4) || (result.sec >= 22 && result.sec <= 24) || (result.sec >= 32 && result.sec <= 34) || (result.sec >= 42 && result.sec <= 44) || (result.sec >= 52 && result.sec <= 54)) { words.seconds = 'секунды';
        }
    // ./Секунды
    // ./Перевод слов
    }
    
