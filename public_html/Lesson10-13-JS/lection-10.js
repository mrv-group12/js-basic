/*
 * Пример с цикъл с обратно отброяване
 * */
let cars = ["Zil","Volvo","Saab"];
for ( i = cars.length - 1; i >=0 ; i-- ) {
    console.log( cars[i] );
    console.log(i * 10);
} 


/*
 * Пример с цикъл с положително отброяване
 * */
let bikes = ["Zil","Volvo","Saab"];
for ( i = 0; i < bikes.length ; i++ ) {
    //console.log( i );
    if( bikes[i] === 'Volvo' ){
      //continue; // ще пропусне текущата стойност и ще продължи със следващата
      //break;    // ще спре до текущата стойност и няма да продулжи по натам
    }
    console.log(bikes[i]);
}


/*
 * FOR... IN цикък с if else if 
 * */

//обект със стойности и метод
let person = { 
  fname:"Здравко", 
  lname:"Желязков", 
  age:92,
  canVote: function(){
    if(this.age >= 18){
      return 'Може да гласува!';
    }
  },
  vqrno : true
}; 

let text = "";
for ( let x in person) {
    
    //console.log(x); // име на свойство
    //console.log(typeof person[x]); // стойност на свойство
    
    if( typeof person[x] === 'function' ){
       text += person[x]();
    }     
    else if( typeof person[x] === 'number' ){
      text = text + 'на възраст ' + person[x] + " години. ";
      // text += 'на възраст ' + person[x] + " години. ";
    }
    else if( typeof person[x] === 'string' ){
      text += person[x] + " ";
    }
  
}
console.log(text);


/*
 * FOR... IN цикъл с switch... case
 * **/
let user = { 
  fname:"Здравко", 
  lname:"Желязков", 
  age:92,
  canVote: function(){
    if(this.age >= 18){
      return 'Може да гласува!';
    }
  },
  vqrno : true
}; 

let tekst = "";
for ( let x in user) {
    console.log(x);
    
   switch(true){
       
     case typeof user[x] === 'function':
         tekst += user[x]();  
         break;
       
     case typeof user[x] === 'number':
         tekst = tekst + 'на възраст ' + user[x] + " години. ";
         break;
       
     case typeof user[x] === 'string':
     case typeof user[x] === 'boolean':
         tekst += user[x] + " ";
         break;
       
   }
}
console.log(tekst);




/*
 * FOR...OF сравнение със стандартния FOR
 * */
let iterable = [10, 20, 30];

// OLD FOR
for(let i = 0; i < iterable.length; i++){
  console.log(iterable[i]+1);
}

//FOR OF
for (let value of iterable) {
  console.log(value + 1);
}



/*
 * Цикъл с While
 * */
let i = 0;
while (i < 10) {
    console.log( "Числото е " + i + "</br>");
    i++;
}



/*
 * Цикъл с Do... While
 * */
let i = 10;
do {
    console.log( "Числото е " + i + "</br>");
    i++;
}
while (i < 10)



/*
 * Цикъл за създаване на HTML таблица
 * */
let table = [   
  ['Name','Location','Email'],  
  ['Spas','s.Ruptsi','spas@spasov.net'],
  ['Grigor','Sofia','gr@grigor.net']
];

let html = '<table> \n';

for(let i = 0; i < table.length; i++){
  //console.log(table[i])
  //create new row
  let row = table[i];
  html += '<tr>\n';
  // get <td> elements
   for(let td of row){
     if(i === 0){
       html += '\t <th>' + td + '</th>\n';
     }
     else {
       html += '\t <td>' + td + '</td>\n';
     }
  }
  //close row
  html += '</tr> \n';
}
html += '</table>';
console.log(html);


/*
 * Цикъл за създаване на HTML селект без стойности
 * */
let table = [1,2,3,'a','b','c',true, true, false];
let select = '<select> \n';

for(let element of table){
  select += '\t <option>' + element + '</option> \n';
}

select += '</select>';
console.log(select);


/*
 * Цикъл за създаване на HTML селект със стойности
 * */
let options = {
  blue: 'син',
  red: 'червен',
  pink: 'розов',
  green: 'зелен'
};
let select = '<select> \n';

for(let el in options){
  select += '\t <option value=\''+el+'\'>' + options[el] + '</option> \n';
}

select += '</select>';
console.log(select);



/*
 * While Цикъл за намиране на всички позици при търсене на символ
 * */
var s = "hello, world, hi, zdrawei, ";

let found = s.indexOf('l');сс
let position = [];

if(found !== -1){
 
  position.push(found);
  
  while(found !== -1){
  
      let newFound = s.indexOf('l', found+1);
    
      if(newFound !== -1){
        position.push(newFound);
        found = newFound;
      } 
      else {
        found === -1;
      }
  }//end while
}//end if
console.log(position);


/*
 * DO While Цикъл за намиране на всички позици при търсене на символ
 * */
var s = "helloЛ, world, hi, zdrawei, ".toLowerCase();

let found = 0;
let position = [];

do{
  
  found = s.indexOf('l',found);
  
  if( found !== -1 ){
    
    position.push(found);
    found++;//задаваме следващата позиция, от която да започне търсенето
    
  }//end if
  
}//end do
while( found !== -1);
console.log(position);



/*
 * Array and Object conflict
 * */

let arr = new Array(1,2,3);
arr['bla'] = 'Bla Bla';

console.log(typeof arr);
console.log(Array.isArray(arr));

console.log(arr.bla);
console.log(arr);

for(let element in arr){
  console.log(element);
}

/*
 * Проблеми при изваждане на десетични числа
 * */

console.log(0.2 - 0.1  ===  0.3 - 0.2) // FALSE

/*
 * Методи на Низовете
 * */
let s = "hello, world";
s.charAt(0);
s.charAt(s.length-1);
s.substring(1,4);
s.slice(1,4);
s.slice(-3);
s.indexOf("l");
s.lastIndexOf("l");
s.indexOf("l", 3);
s.split(", ");
s.replace("h", "H");
s.toUpperCase();

console.log('\u1E9B\u0323'.normalize());

console.log( 'abc'[0] ); //a
console.log( 'abc'[1] ); //b
console.log( 'abc'[2] ); //c
console.log( 'abc'[4] ); //undefined
console.log( 'abc'.charAt(0) ); //a 
console.log( 'abc'.charAt(1) ); //b
console.log( 'abc'.charAt(2) ); //c
console.log( 'abc'.charAt(4) ); //''

