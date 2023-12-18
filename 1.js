const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '1.txt');
let arrayData = []

function keepOnlyDigits(str) {
    const regex = /\D/g;
    return str.replace(regex, '');
}
let result = 0;

fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
        console.error('Произошла ошибка при чтении файла:', err);
        return;
    }
    console.log('Содержимое файла:', data.split("\n"));
    arrayData = data.split("\n")
    arrayData.forEach((line)=>{
        console.log(line)
        let number = keepOnlyDigits(line)
        console.log("Оставим только цифры:")
        if(number){
            console.log(number)
            console.log(number[0])
            console.log(number[number.length-1])
            console.log(number[0]+number[number.length-1])
            number = Number(number[0]+number[number.length-1])
            result += number
        }
        
    })
    console.log(result)
});

