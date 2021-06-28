//Buscando listagem
const el_lista_add=document.querySelector('#lista-add')
const el_lista_feito=document.querySelector('#list-feita')
//capturando input
const input=document.querySelector('#nova-tarefa')
const button=document.querySelector('#add')

//contador para id
var contador=0;
// 
button.addEventListener('click',function() {
    //  
    const li=document.createElement('li');
    li.id=contador;
    li.innerText=input.value;
    li.onclick = clickAddFeito;
    //Coloca la como filho da li 
    // 
    el_lista_add.appendChild(li);
    contador++;
    console.log('%cindex.js line:29 event', 'color: #007acc;', a);

});

function clickAddFeito(event){
    let id = event.target.id;
    let elementoClicado = document.getElementById(id);
    el_lista_feito.appendChild(elementoClicado);
}