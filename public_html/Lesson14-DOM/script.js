
// изпълнява се при промяна на статуса на document
document.onreadystatechange = function(){
    //console.log(document.readyState);
    if(document.readyState === 'complete'){
        //създаване на събитие при натискане бутон от мишката
        document.addEventListener('click',function(event){
            console.log(event.target.nodeName);
            console.log(event.altKey);
            console.log(event.clientX);
        });
        // създаване събитие свързано с натискане на клавиш
        document.addEventListener('keypress',function(event){
            console.log(event.keyCode);
            console.log(event.charCode);
            console.log(event.key);
        });
    }
    
    //създаване на елемент
    var content = document.createElement('div');
    content.className = "content-block"; //задаване на клас
    content.style.textAlign = 'center';  //задаване на стил
    //създаване на променлива с всичките h2 елементи
    var elements = document.querySelectorAll('.block > h2');
    //console.log(elements);
    
    for(i = 0; i < elements.length; i++){
        var linkId = 'link' + i; //създаване на ид
        //задаване на ИД на текущия h2 елемент
        elements[i].id = linkId;
        //създаване на линк елемент
        var link = document.createElement('a');
        link.href = '#' + linkId;
        link.style.display = 'block';
        link.innerText = elements[i].innerText;
        //закачане на новосъздадения елемент към content
        content.appendChild(link);
    }
    /*
    var father = document.getElementsByClassName('container');
    console.log(father);
    console.log(father[0].childNodes);
    father[0].insertBefore( content, father[0].childNodes[0]) ;
     */
    console.log(elements[0]);
    
    elements[0].parentNode.parentNode.insertBefore( content, elements[0].parentNode);
    // H2        div.block  div.container
};

console.log(document.readyState);
console.log(document);
