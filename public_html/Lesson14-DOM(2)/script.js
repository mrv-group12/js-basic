let izvlechenie = [
    {ime: 'Spas', egn:'1010101010', finansi:'10000'},
    {ime: 'Spas1', egn:'1010112010', finansi:'10000'},
    {ime: 'Spas2', egn:'1010113010', finansi:'10000'},
    {ime: 'Spas3', egn:'1010114010', finansi:'10000'},
    {ime: 'Spas4', egn:'1010115010', finansi:'10000'},
    {ime: 'Spas5', egn:'1010116010', finansi:'10000'},
    {ime: 'Spas6', egn:'1010117010', finansi:'10000'},
    {ime: 'Spas7', egn:'1010118010', finansi:'10000'},
    {ime: 'Spas8', egn:'1010119010', finansi:'10000'},
    {ime: 'Spas9', egn:'1010113010', finansi:'10001'}
];

let buttonCount = izvlechenie.length / 5;


let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

let i = 0;
//
for(i = 0; i < izvlechenie.length; i++ ){

    if( i !== 0 && i%5 === 0){
        break;
    }
    
    if(i === 0 ){
      //изписване заглавния ред  
      let tr = document.createElement('tr');
      for ( let key in izvlechenie[0]){
          let th = document.createElement('th');
          th.innerText = key;
          tr.appendChild(th);
      }
      thead.appendChild(tr);
    }
    
    let tr = document.createElement('tr');
    
    for ( let key in izvlechenie[i]){
        let td = document.createElement('td');
        td.innerText = izvlechenie[i][key];
        tr.appendChild(td);
    }
    
    tbody.appendChild(tr);
}
console.log(i);
table.appendChild(thead);
table.appendChild(tbody);

let mainElement = document.getElementById('block');
mainElement.appendChild(table);


//Създаване на бутони
for(k = 0; k < buttonCount; k++){
    let button = document.createElement('input');
    button.type = 'button';
    button.value = k + 1;
    button.className = 'stranica';
    button.addEventListener('click',buttonClicked);
    mainElement.appendChild(button);
    button.setAttribute('data-position',k * 5);
}

function buttonClicked(event){
    console.log(event.target.dataset.position);
};
