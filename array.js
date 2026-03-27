marks = [40,50,60,70,80,90];

console.log(marks);

marks.push(100);

console.log(marks);

marks.pop();

console.log(marks);

console.log("marks.length: " + marks.length);

marks.forEach((mark) => {
    console.log(mark);
});