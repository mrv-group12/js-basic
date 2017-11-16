/*
 *  Обектите и масивите се предават по референция, а не по стойност
 * */

var a = [1,2,3];
var b = a;
b[0] = 9;
console.log(a);//[9,2,3]
console.log(b);//[9,2,3]



let obj = {
  model : 'toyota',
  color: 'green'
};

console.log(obj);

let sec = obj;

sec.color = 'yellow';

console.log('Sec : '+sec.color);
console.log("Obj : "+obj.color);



var portokal = {klasifikaciya:'плод'};
function prevurniVZelenchuk(plod){
    plod.klasifikaciya = 'зеленчук';
    return plod;
}
prevurniVZelenchuk(portokal);
console.log(portokal.klasifikaciya); //зеленчук



/*
 *  Задаване на анонимна функция като стойност на променлива
 * */
var factorial = function (n) { 
  if (n < 2){
    return 1;
  } else {
    return n * (n - 1); 
  }
}; 
console.log(factorial(3)); //6




/*
 *  Arrow функция
 * */
let r = [1,2,3].map(v => v + 1).reduce((a, b) => a + b);
console.log(r);

// разширено изписване
let r = [1,2,3];
r = r.map( (a) => {
  return a+1;
});

r = r.reduce(function(a,b){
  return a+b;
});
console.log(r);

let r = [1, 2, 3].map(v => v + 1).reduce((a, b) => {
    let u = a + b;
    return u * u;
});
console.log(r);

/////////////////////
let z = [1, 2, 3].map(function (a) {
    return a + 1;
}).reduce(function (a, b) {
    return a + b;
});
console.log(z);

/////////////////////
let y = [1, 2, 3];

y = y.map(function (v) {
    return v + 1;
});

y = y.reduce(function (a, b) {
    return a + b;
});
console.log(y);


function letsRockWith(rockBand){
  
  if(checkIfRock(rockBand)){
    return 'Let\'s Rock with ' + rockBand;
  }
  
}


function letsRockWithout(rockBand){
  if(checkIfRock(rockBand)){
    return 'Let\'s Rock without ' + rockBand;
  }
}

function checkIfRock(rockBand){
    let allRockBands = ['Deep Purple', 'Dio', 'Rainbow', 'Pink floyd', 'Led Zeppelin'];
    if( allRockBands.indexOf(rockBand) !== -1 ){
      return true;
    }
}

console.log(letsRockWith('Rainbow'));
console.log(letsRockWithout('Dio'));




/*
 *  Създаване на обект с конструктурна функция
 * */
//x=10 зададено като аргумент би означавало, че ако не е подаден аргумент 
// на мястото на х да се използва стойността 10 по подразбиране
// този синтаксис не се поддържа от IE11
function Car(marka, model, x=10){
    this.marka = marka;
    this.model = model;
    this.pokarai = function(){
            return 'ZoomZoom'; 
    };
}



let mazda = new Car ('mazda','y'); 
let camry = new Car('toyota', 'camry','x');
let result = camry.pokarai();
console.log(result);
console.log(mazda.model);


function Car(marka, model, x ){
    //Проверка дали х има стойност и ако няма да се зададе 10
    x = x || 10;
    this.marka = marka;
    this.model = model;
    this.pokarai = x;

}
let mazda = new Car ('mazda','z','0');
let camry = new Car('toyota', 'camry');
console.log(mazda);
console.log(camry);




/*
 *  Създаване на обект с Object.create()
 * */
let Car = {
    marka: null,
    model: null,
    opisanie: function() { 
      return this.marka + " " + this.model;
    }
};

let corola = Object.create(Car);
corola.marka = "Toyota2";

let avensis = Object.create(Car);
avensis.marka = 'Toyota';

console.log(corola.opisanie());
console.log(avensis.opisanie());




/*
 *  Използване на прототип при обекти създадени с конструктор
 * */
function Car(marka, model, x ){
  
    var x = x || 10;
  
    this.marka = marka;
    this.model = model;
    this.pokarai = x;

}
// с прототип създаване метод за всички инстанции от създадения обект 
Car.prototype.year = 2017;
var corola =new Car();
corola.marka = "Toyota";
corola.model = "Avensis";
console.log(corola);


/*
 *  Използване на прототип за създаване на нов метод към обекта на масивите
 * */
let arr = [1,2,3,4];

Array.prototype.sumElements = function(){
  return this.reduce(function(a,b){
    return a+b;
  });
};
console.log(arr.sumElements()); //10

//алтернативен метод - ползвайки отделна функция
let arr = [1,2,3,4];

function sumElements(x){
  return x.reduce(function(a,b){
    return a+b;
  });
} ;            
console.log(sumElements(arr));



/*
 *  Добавяне на нов методи и свойства към обекти създадени с Object.create()
 * */
let Car = {
    marka: null,
    model: null,
    pokarai: function() { 
      return this.marka + " " + this.model;
    }
};

//Създаване на свойство за всички инстанции
Car.gear = 'manual';
//Създаване на свойства само за текущата инстанция
let corola = Object.create(Car);
corola.year = 0;
corola.marka = "Toyota2";
corola.color = 'red';

let avensis = Object.create(Car);
avensis.marka = 'Toyota';

console.log(corola);
console.log(avensis);



/*
 *  Добавяне на нов методи и свойства към обекти създадени с конструктур
 * */
function Car(marka, model, x ){
  
    var x = x || 10;
  
    this.marka = marka;
    this.model = model;
    this.pokarai = x;

}

Car.prototype.year = 2017;

var corola =new Car();
corola.marka = "Toyota";
corola.model = "Corola";
corola.gear = 'manual';
corola.red  = 'red';

var avensis =new Car();
avensis.marka = "Toyota";
avensis.model = "avensis";


console.log(corola);
console.log(avensis);



/*
 *  Добавяне на нов методи с Object.defineProperty
 * */
function Car(marka, model, x ){
  
    var x = x || 10;
  
    this.marka = marka;
    this.model = model;
    this.pokarai = function (x){ return x+ 1; };

}

Car.prototype.year = 2017;

var corola =new Car();
corola.marka = "Toyota";
corola.model = "Corola";
corola.gear = 'manual';
corola.red  = 'red';

Object.defineProperty( corola, 'price', {value: '30 000E', enumerable: false});
console.log(corola);

var avensis =new Car();
avensis.marka = "Toyota";
avensis.model = "avensis";

console.log(Object.keys(corola));

for(let ele in corola){
  console.log(typeof ele);
};




/*
 * Функция приемаща за аргумент функция, която връща като резултат функция
 * */
function funcPlus( a = secondFunc() ){
  console.log(a);
}
function secondFunc(){
    
  return thirdLevelFunc();
  
}
function thirdLevelFunc(){
  return 'Аз съм от трето ниво';
}



/*
 *  Задаване на стойност по подразбиране на липсващ аргумент
 * */

//ЕS6 вариант
function funcPlusThree( a,b,c =0 ){
  c = c || 0;
  return a + b + c;
}
//ЕS5 вариант
function funcPlusThree( a,b,c ){
  c = c || 0;
  return a + b + c;
}

console.log(funcPlusThree(1,2));



/*
 *  IIFE - незабавно извикана функция със зададена стойност
 * */
(function(a){
   return a * a;
 })(10);
 
 
 /*
 *  Работа със създаване на обекти от тип Object.create();
 * */
 let Car = {
    marka: null,
    model: null,
    pokarai: function() { return 'Vruum'; }
};

Car.year = 2017;

let corola = Object.create(Car);
corola.marka = 'Toyota';
corola.model = 'Corola';
//презаписаване на локален метод на инстанция
corola.pokarai = function(){return "Tartak";};

let astra = Object.create(Car);
astra.marka = 'Opel';

Car.model = 'Polo';

console.log(astra);
console.log(corola);
console.log(Car);




/*
 *Използване на  prototype при обекти създадени чрез конструктурна функция
 * */
function Car(marka, model){
	this.marka = marka;
	this.model = model;
	this.pokarai = function(){
		console.log('ZoomZoom'); 
	};
}



let camry = new Car('toyota', 'camry');
let vw    = new Car('vw', 'golf');                    
    
//създаване на свойство, което не може да се достъпи от цикъл
Object.defineProperty( vw, 'price', {value: '30 000E', enumerable: false});

console.log(Object.keys(vw));

for(let element in vw){
  console.log(typeof vw[element]);
}
console.log(vw.price);


/*
 *  Използване на гетъри и сетъри
 * */
var Car = {
  get price(){
	return this.bezDDS * 1.2;
  },
  set price(price){
	this.bezDDS = price;
  }
};  

toyota = Object.create(Car);
toyota.price = 900;
toyota.price; // 1080
console.log(toyota.price);



/*
 *  Използване на Delete 
 * */

let Car = { 
  marka: 'Subaru'
}
;
let toyota = Object.create(Car);
toyota.marka = 'Toyota';
toyota.model = 'Avensis';

console.log(toyota);
delete toyota.marka;
console.log(toyota);
delete toyota.model;

let toyota2 = Object.create(Car);

console.log(toyota);

let o = {x:1}; // o има собствено свойство x и наследява от прототипа 
delete o.x;    // връща true и изтрива x
delete o.x;    // връща true (въпреки че х несъществува)
delete o.toString; // връща true, въпреки че нищо не прави
delete 1; // нищо не прави, но връща true