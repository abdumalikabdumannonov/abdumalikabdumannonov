
const btn2 = document.getElementById('btn2');
const btn1 = document.getElementById('btn1');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const id3 = document.getElementById('id3');
const id2 = document.getElementById('id2');
btn1. onclick  = function( ){
id3.style.transform ='translateX(1px) '
    id2.style.transform ='translateX(1px) translateY(59px)'
}
btn2. onclick  = function()  {
id3.style.transform ='translateX(70px)'
    id2.style.transform ='translateX(70px) translateY(56px)'
}
btn3. onclick  = function( ){
id3.style.transform ='translateX(140px)'
    id2.style.transform ='translateX(140px)  translateY(56px)'
}
btn4. onclick  = function( ){
id3.style.transform ='translateX(210px)'
    id2.style.transform ='translateX(210px) translateY(56px)'
}
btn5. onclick  = function( ){
id3.style.transform ='translateX(276px)'
    id2.style.transform ='translateX(276px) translateY(56px)'
}

btn6. onclick  = function( ){
    id3.style.transform ='translateX(350px) translateY(9px)'
        id2.style.transform ='translateX(350px)  translateY(60px)'
    }
    
 btn7. onclick  = function( ){
alert('bunday sahifa mavjud emas');
 }
 let click1 = document.getElementById('click');

 click1.onclick = function () {
     let theme = document.getElementById('theme');
     if (theme.getAttribute("href") == './bu.css') {
         theme.href = 'aqora.css'
     }
     else{
         
         theme.href = './bu.css'
     }
 } 