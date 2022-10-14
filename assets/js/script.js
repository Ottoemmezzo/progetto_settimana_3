var visore=document.getElementById('visore');
var operazione="";

//OPERATORI///////////////////////////////////////////////////////////
document.getElementById('//').addEventListener("click",function(){
    visore.value='/';
});

document.getElementById('/+').addEventListener("click",function(){
    visore.value+='+';

    
});
document.getElementById('/=').addEventListener("click",function(){
    let pos=null, risultato=null;
    operatore=visore.value;
    visore.value='';
    /*pos=operatore.indexOf('+');
    let op1=operatore.slice(0,pos);
    console.log(op1);
    let op2=operatore.slice(pos+1,operatore.length);
    console.log(op2);*/
    risultato=eval(operatore);
    visore.value=risultato;
    


});
document.getElementById('/-').addEventListener("click",function(){
    visore.value+='-';
});
document.getElementById('/.').addEventListener("click",function(){
    visore.value+='.';
});
document.getElementById('C').addEventListener("click",function(){
    visore.value='';
});
document.getElementById('/*').addEventListener("click",function(){
    visore.value+='*';
});

//NUMERI///////////////////////////////////////////////////////////
document.getElementById('1').addEventListener("click",function(){
    visore.value+='1';
});
document.getElementById('2').addEventListener("click",function(){
    visore.value+='2';
});
document.getElementById('3').addEventListener("click",function(){
    visore.value+='3';
});
document.getElementById('4').addEventListener("click",function(){
    visore.value+='4';
});
document.getElementById('5').addEventListener("click",function(){
    visore.value+='5';
});
document.getElementById('6').addEventListener("click",function(){
    visore.value+='6';
});
document.getElementById('7').addEventListener("click",function(){
    visore.value+='7';
});
document.getElementById('8').addEventListener("click",function(){
    visore.value+='8';
});
document.getElementById('9').addEventListener("click",function(){
    visore.value+='9';
});
document.getElementById('0').addEventListener("click",function(){
    visore.value+='0';
});

