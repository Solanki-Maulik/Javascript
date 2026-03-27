let arr = [1, 2, 3, 4, 5]

let sum = arr.reduce((acc,num)=> acc+num,0);
//in this last zero means sum starts from value 0 and after 1+2+3+4+5=15
console.log(sum);

let sum10 = arr.reduce((acc,num)=> acc+num,10);
//now sum strats from 10 and after 10+1+2+3+4+5=25
console.log(sum10);

let sub = arr.reduce((acc,num)=> acc-num,0);
console.log(sub);