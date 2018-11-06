var textSize=10;
var incrementer=true;


function Grow(){
    //gets the element by id
    var x=document.getElementById("words");

    //changes when the function increments or decrements
    if(x.style.fontSize === "100px"){
        incrementer=false;
    }
    if(x.style.fontSize === "10px"){
        incrementer=true;
    }

    //increment/decrment
    if (incrementer===true){
        textSize+=10;
    }
    if (incrementer===false){
        textSize-=10;
    }


    //changing font size onclick
    x.style.fontSize=textSize+"px";
}
var i=0;
function ColorChange(){
    i++;
    //get element by id
    var x=document.getElementById(i);
    
    if(i===i){
        console.log("is good yo");
    }

    x.style.backgroundColor="red";
}