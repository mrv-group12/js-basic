(function(){

    let izvlechenie = [
        {ime: 'Spas0',  egn:'1010101010', finansi:'10000'},
        {ime: 'Spas1', egn:'1010112010', finansi:'10000'},
        {ime: 'Spas2', egn:'1010113010', finansi:'10000'},
        {ime: 'Spas3', egn:'1010114010', finansi:'10000'},
        {ime: 'Spas4', egn:'1010115010', finansi:'10000'},
        {ime: 'Spas5', egn:'1010116010', finansi:'10000'},
        {ime: 'Spas6', egn:'1010117010', finansi:'10000'},
        {ime: 'Spas7', egn:'1010118010', finansi:'10000'},
        {ime: 'Spas8', egn:'1010119010', finansi:'10000'},
        {ime: 'Spas9', egn:'1010113010', finansi:'10001'},
        {ime: 'Spas10', egn:'1010113010', finansi:'10001'},
    ];

    createTable(izvlechenie,0);
    createButtons(izvlechenie);

    function newDataTable(){
        console.log(this);
       let position = this.dataset.position;
       let currTable = document.getElementById('container');
       console.log(currTable);
       currTable.removeChild(currTable.childNodes[0]);   
       createTable(izvlechenie,position);
    }

    function createEle(arg){
        return document.createElement(arg);
    }

    function createTable(arr, position){
        
        let container = document.getElementById('container');
        let table = createEle('table');
        let thead = createEle('thead');
        let tbody = createEle('tbody');
        //console.log(position);
        for( i = position; i < arr.length; i++){
            //console.log(i);
            //console.log(position + 5);
            if(i === parseInt(position) + 5){
                break;
            }
            //създаване th ементи за thead
            if( i === position){

                let tr = createEle('tr');

                for(let key in arr[i]){
                    let th = createEle('th');
                    th.innerText = key.toUpperCase();
                    tr.appendChild(th);
                }

                thead.appendChild(tr);
            }

            let tr1 = createEle('tr');

            for(let x in arr[i]){
                let td = createEle('td');
                td.innerText = arr[i][x];
                tr1.appendChild(td);
            }

            tbody.appendChild(tr1);
        }

        table.appendChild(thead);
        table.appendChild(tbody);
        container.appendChild(table);
    }
    
    function createButtons(arr){
        
        let buttonCount = Math.round( (arr.length + 4) / 5);
        let pagination = document.getElementById('pagination');
        //console.log(buttonCount);
        //console.log(arr.length);
        for(k = 0; k < buttonCount; k++){
            let input = createEle('input');
            input.type = 'button';
            input.value = k + 1;
            input.addEventListener('click',newDataTable);
            input.setAttribute('data-position', k * 5);
            pagination.appendChild(input);
        }
    }
})();