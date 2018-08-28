function sequenceFizzBuzz(start = 0, step = 1) {
    return function () {
        let str = '';
        let i = start += step;
        if (!(i % 15))
            str += "FizzBuzz";
        else if (!(i % 3))
            str += "Fizz";
        else if (!(i % 5))
            str += "Buzz";
        else
            str += i;
        return str;
    }
}

let generator = sequenceFizzBuzz();
let generator1 = sequenceFizzBuzz(4);
let generator2 = sequenceFizzBuzz(7);
let generator3 = sequenceFizzBuzz(0, 1);
let generator4 = sequenceFizzBuzz(5, 10);
let generator5 = sequenceFizzBuzz(2);

console.log('######Функция генератор#######');
console.log(generator());
console.log(generator1());
console.log(generator2());
console.log(generator3());
console.log(generator4());
console.log(generator5());
console.log('######Функция определения типа переменной#######');

function getTypeVariable(variable) {
    return (typeof variable);
}

let user = {name: 'Олег'};
let name = 'Олег';
let string;
let age = 24;
console.log(getTypeVariable(user));
console.log(getTypeVariable(name));
console.log(getTypeVariable(string));
console.log(getTypeVariable(age));

