    let container=document.querySelector('#container');
    let content=document.querySelector('content');
    let black=document.querySelector('#black');
    let rainbow=document.querySelector('#rainbow');
    let div;
    let allDivs;
    size=prompt('enter number');
    size=parseInt(size);
    console.log(size); 

    boxs=Math.pow(size,2);
    
    make(boxs);
    newsize(size);
    
    rainbow.addEventListener('click',mixclr)
    black.addEventListener('click',dark)

    function make(boxs){
        for(i=0;i<boxs;i++){
            div = document.createElement('div'); 
            div.classList.add('content'); 
            container.appendChild(div);         
            }
        }
    function dark(){
        allDivs.forEach(element=>{
        element.style.backgroundColor='white';    
        });
        }
    function mixclr(){
        allDivs=container.querySelectorAll('div');
        allDivs.forEach(element => {
            element.addEventListener('mouseover',(e)=>{
                console.log('dada');
                let ranR =Math.floor(Math.random()*256);
                let ranG =Math.floor(Math.random()*256);
                let ranB =Math.floor(Math.random()*256);
            e.target.style.backgroundColor=`rgb(${ranR},${ranG},${ranB})`;})    
        });
        
        }
    function newsize(size){
        container.style.gridTemplateColumns=`repeat(${size},1fr)`    
        }
   
