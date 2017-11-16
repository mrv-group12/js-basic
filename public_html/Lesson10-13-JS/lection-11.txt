/*
 * Използване на метода join
 * */
var a = ['a','b','c'];
console.log(a.join()); // => "a,b,c"
a.join(" "); // => "a b c"
a.join(""); // => "abc"




/*
 * Използване на метода concat
 * */
var a = ['a','b','c'];
var b = [1,3,4,19,[111,11111]];
var c = ['A', 'BF'];
var z = a.concat(b,c);
console.log(z); //["a", "b", "c", 1, 3, 4, 19, [111, 11111], "A", "BF"]



/*
 * Използване на метода reverse
 * */
var a = [1,2,3];
a = a.reverse(); 
console.log(a);//[3,2,1]




/*
 * Използване на метода toString
 * */
var a = [
  ['asdasd','zzzzzads'],
  [true,false,true],
  [
    [1111,2222,3333],
    [23123,123123,123]
  ],
  'a',
  ' '
];
a = a.toString();
console.log(a);
//"asdasd, zzzzzads,true,false,true,1111,2222,3333,23123,123123,123,a, "




/*
 * Използване на метода sort
 * */
var a = [
  ['asdasd','zzzzzads'],
  [true,false,true],
  [
    [1111,2222,3333],
    [23123,123123,123]
  ],
  'a',
  ''
];

let aNum = ['4', 33, 222, ,1111, null,0, 1, 11];
console.log(aNum.sort());

let higher = aNum.sort(function(a,b){ 
  return a-b;
});
console.log(higher);

let lower = aNum.sort(function(a,b){
  return b-a;
}); 
console.log(lower);




/*
 * Използване на метода splice
 * */
let a = [1,2,3,4,5];
a.slice(0,3); 	// връща[1,2,3]
a.slice(3); 	// връща[4,5]
a.slice(1,-1); 	// връща[2,3,4]
a.slice(-3,-2);	// връща[3]



let a = [1,,3,4,5,6,7,8];
let z = a.splice(4,1,'a','b','c'); // връща [5,6,7,8]; a е [1,2,3,4
console.log(a);
console.log(z);



a.splice(1,2); // връща [2,3]; a е [1,4]
a.splice(1,1); // връща [4]; a е[1]

let b = [1,2,3,4,5];
let x = b.splice(2,2,[1,2],3); 
console.log(b); //  [1,2,[1,2],3,3,4,5]
console.log(x); // връща ['a','b']


/*
 * Използване на метода pop & push
 * */
let a = [1,2,3];
a.concat(4, 5);         // връща [1,2,3,4,5]
a.concat([4,5]); 	// връща[1,2,3,4,5]
a.concat([4,5],[6,7]); 	// връща[1,2,3,4,5,6,7]
console.log( a.concat(4, 5,[6,7, [3,9]]))	//връща [1,2,3,4,5,[6,7]]




/*
 * Използване на метода pop & push
 * */
let stack = [ ]; 		 
stack.push(1,2); 	// stack: [1,2] връща 2
stack.pop(); 		// stack: [1] 	връща 2
stack.push(3); 		// stack: [1,3] връща 2
stack.pop(); 		// stack: [1] 	връща 3
stack.push([4,5,4,5],3,2,1); 		// stack: [1,[4,5]] 	връща 2
stack.pop(); 		// stack: [1] 	връща [4,5]
stack.pop(); 		// stack: [] 	връща 1

console.log(stack);


/*
 * Използване на метода forEach
 * */
let data = ['a','b','c','d','e',,];
data.forEach(function(value,i){
  console.log('Стойността е: ' + value + ', намираща се на позиция: ' + i);
});


let data = ['a','b',,'c','d','e',,];
data.forEach(function(v,i){
  data[i] = 10;
});
console.log(data);

for(let i = 0; i < data.length;i++){
  data[i] = 10;
}
console.log(data);




/*
 * Използване на метода map
 * */
let a = [1, , 2, 3, 5];
let b = a.map(function(value,i){
    if (value >2){
       return value * i;
    } else {
      return value;
    }
}); 
console.log(b);




/*
 * Използване на метода filter
 * */
let a = [5, 4, 3, 2,1];

let smallvalues = a.filter(function(value){
  return value < 3;
}); 		// [2, 1]
console.log(smallvalues);

let everyother   = a.filter(function(value,i) { 
  return i%2==0 ;
}); 	// [5, 3, 1]
console.log(everyother);




/*
 * Използване на метода every и  some
 * */
let a = [1,2,3,4,5];

let z = a.every(function(x) { 
  return x < 10; 
}); // true


a.every(function(x) { 
  return x % 2 === 0; 
}); // false

let b = [1,2,3,4,5];
b.some(function(x) { 
  return x%2===0; 
}); // true



/*
 * Използване на метода Reduce
 * */
let a = [1,2,3,4,5];
// сумиране на стойности
let sum = a.reduce(function(a,b){
  return a + b;
});
console.log(sum); //15

// умножение на стойности
let product = a.reduce(function(x,y) { 
    return x*y;
}, 1);
console.log(product);//120

// получаване на най-голямата стойност
let max = a.reduce(function(x,y) {
  if(x>y){
    return x;
  } else{
    return y;
  }
  //return (x>y)?x:y;
}); 
console.log(max);//5







/*
 * Използване на метода IdexOf
 * */
let a = [0,0,1,2,1,0];
console.log(a.indexOf(0) );	// => 0: 
a.lastIndexOf(1);		// => 3: 
a.indexOf(3);                   // => -1: няма елемент със стойност 3




/*
 * Преместване на елемент от позиция n на първа позиция
 * */
let arr  = [
  [10,24],
  [11,28],
  [11,23],
  [15,29],
  [5,21]
];
console.log(arr);
//Трябва да намерим позицията на елемент от втора позиция в масива със стойност 29
let result = arr.find(function(value,i){
  if(value[1] === 29){
    return i;
  }
}); // за резултат ще се върне стойността на съответни масив [15,29]
//Търсене на съответната позиция в arr
let pos = arr.indexOf(result);
//премахване на търсения резултат от масива
arr.splice(pos,1);
//добавяме го на първа позиция.
arr.unshift(result);
console.log(arr);




/*
 * Филтриране на елементи от двумерен масив по стойности NO (неосъждан) c О (осъждан)
 * */
let people = [
  ['STudent 14', 'NO'],
  ['Student 92', 'O'],
  ['STudent 51', 'NO'],
  ['Student 28', 'O'],
  ['STudent 61', 'O'],
  ['Student 22', 'O'],
  ['STudent 11', 'NO'],
  ['Student 32', 'O']
];

let noCrime = [];

let criminals = people.filter(function(value){
  //Проверка дали втора позиция от малките масиви е равна на О
  if(value[1] === 'O'){
     return true;
  }
  else if (value[1] === 'NO'){
    noCrime.push(value);
  }
  
  return false;
  
});
console.log(noCrime);
console.log(criminals);


/*
 * Преместване на елемент с нулева позиция ID62 на 0-ва позиция
 * */
let questions = [
  ['ID61','STudent 14', 'NO'],
  ['ID34','Student 92', 'O'],
  ['ID132','STudent 51', 'NO'],
  ['ID12','Student 28', 'O'],
  ['ID41','STudent 61', 'O'],
  ['ID62','Student 22', 'O'],
  ['ID34','STudent 11', 'NO'],
  ['ID12','Student 32', 'O']
];
//ID62
let pos = null;
//издирване на елемента
let result = questions.find(function(value,i){
  
  if(value[0] === 'ID62'){
    pos = i;//връща неговата текуща позиция в масива
    return true;
  }
  return false;
 
});
//изтрива елемента от масива
questions.splice(pos,1);
//залепва го най-отпред
questions.unshift(result);
console.log(questions);