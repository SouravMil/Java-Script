var scores = Array(6);
var scores = new Array(20,40,35,27,100) 

var marks = [20,31,25,14,69,85]
console.log(marks[3]);
marks[3] = 55;
console.log(marks[3]);
console.log(marks.length);

marks.push(77); // add value in array at last index
//console.log(marks.pop()); //remove the last index value from array
console.log(marks.unshift(2)); // add value at 1st index

console.log(marks);
console.log(marks.indexOf(77));

// 120 is present in array
console.log(marks.includes(120));
submarks = marks.slice(2,5);
console.log(submarks);
var sum=0;
/*for(let i=0;i<marks.length;i++)
{
    //console.log(marks[i]);
    sum = sum + marks[i];
}
console.log(sum);*/
//reduce filter map
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total);

console.log("++++++++++++++++++++++++++")
var metrics = [11,21,22,25,24];
var even = [];
for(let j=0;j<metrics.length;j++)
{
    if(metrics[j] %2 == 0)
    {
        even.push(metrics[j]);
        //console.log(metrics[j]);
    }
}
console.log(even.length);
let newFilterEvenNumber =metrics.filter(score=>score%2==0);
console.log(newFilterEvenNumber);

//map
let mapArray =newFilterEvenNumber.map(score=>score*3);
let totalVal = mapArray.reduce((addition,eachnumber)=>addition+eachnumber,0);
console.log(mapArray);
console.log(totalVal);

var metrics1 = [11,21,22,25,24];
let sumValue = metrics1.filter(metric=>metric%2==0).map(metric=>metric*3).reduce((sum,val)=>sum+val,0);
console.log(sumValue);

let fruits = ["banana","mango","pomergrante","apple"]
console.log(fruits.sort());
console.log(fruits.reverse());

var numbers = [12,164,467,7,89,85]
console.log(numbers.sort());
numbers.sort(function(a,b)
{
    return a-b
})

console.log(numbers.sort((a,b)=> a-b));