    let container=document.querySelector('#container');
    let content=document.querySelector('content');
    let black=document.querySelector('#black');
    let rainbow=document.querySelector('#rainbow');
    let size=document.querySelector('#size');
    let div, allDivs;

    //removes child elements and takes the new size entered
    size.addEventListener('click',()=>{
        container.replaceChildren();
        size=prompt('enter number');
        validate(size);
    })

    //checks if input is smaller or greater than 100
    function validate(size){
        size=parseInt(size);
        if(size>100){
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

    //takes the size entered and make child elements
    function make(boxs){
        for(i=0;i<boxs;i++){
            div = document.createElement('div'); 
            div.classList.add('content'); 
            container.appendChild(div);         
            }
        }
    //gives dark colour to boxes
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
    //gives rainbow colour to boxes
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
    //makes the number of columns
    function newsize(size){
        container.style.gridTemplateColumns=`repeat(${size},1fr)`    
        }
   
