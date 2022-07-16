    let container=document.querySelector('#container');
    let content=document.querySelector('content');
    let black=document.querySelector('#black');
    let rainbow=document.querySelector('#rainbow');
    let div, allDivs;
    size=prompt('enter number');
    validate(size);

    function validate(size){
    size=parseInt(size);
    if(size>10){
        alert("Enter a Number Smaller than Or equal to 10")
        size=prompt('enter number');
    }else{
        boxs=Math.pow(size,2);
        make(boxs);
        newsize(size);
    }
    } 
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
        allDivs=container.querySelectorAll('div');
        allDivs.forEach(element => {
            element.addEventListener('mouseover',(e)=>{
                    options=['#353935','#28282B','#1B1212',
                    '#36454F','#000000','#343434','#9E9E9E',
                    '#757575','#424242'];
                    e.target.style.backgroundColor=options[~~(Math.random()*options.length)];})    
                });
            
        }
    function mixclr(){
        allDivs=container.querySelectorAll('div');
        allDivs.forEach(element => {
            element.addEventListener('mouseover',(e)=>{
                let ranR =Math.floor(Math.random()*256);
                let ranG =Math.floor(Math.random()*256);
                let ranB =Math.floor(Math.random()*256);
            e.target.style.backgroundColor=`rgb(${ranR},${ranG},${ranB})`;})    
        });  
        }
    function newsize(size){
        container.style.gridTemplateColumns=`repeat(${size},1fr)`    
        }
   
