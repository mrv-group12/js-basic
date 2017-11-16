//let content = document.createElement('div');
//content.className = 'main-content';

let zaglavia = document.querySelectorAll('.block h2');
let sadarjanie = document.getElementById('sadarjanie');

for( let i = 0; i < zaglavia.length; i++ ){
    //console.log(zaglavia[i]);
    let elementOtSadarjanie = zaglavia[i].innerText;
    zaglavia[i].id = 'link'+i;
    let text = "<a href='#link"+ i +"'>" + elementOtSadarjanie + "</a>";
    //let link = document.createElement('a');
    //link.href = '#' + 'link' + i;
    //link.innerText = elementOtSadarjanie;
    sadarjanie.innerHTML += text;
   // content.appendChild(link);
   // console.log(link);
}


//let glavenRoditel = document.getElementsByClassName('container');
//document.getElementsByTagName('body')[0].insertBefore(content,glavenRoditel[0]);