let passwordOneEl=document.getElementById("passwordOne");
let passwordTwoEl=document.getElementById("passwordTwo");



function generatePassword(){
   /* let generatePasswordOne= Math.floor(Math.random()*characters.length)
    let generatePasswordTwo= Math.floor(Math.random()*characters.length)
    passwordOneEl.textContent=generatePasswordOne
    passwordTwoEl.textContent=generatePasswordTwo*/
    /*const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];*/
   /* const characters="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    passwordLength=15;
    passwordOne="";
    passwordTwo="";
for(let i=0;i<passwordLength;i++){
    randomPasswordone=Math.floor(Math.random()*characters.length)
    passwordOne+= characters.substring(randomPasswordone,randomPasswordone+1)
    randomPasswordtwo=Math.floor(Math.random()*characters.length)
    passwordTwo+= characters.substring(randomPasswordtwo,randomPasswordtwo+1)
}
passwordOneEl.innerHTML=passwordOne
passwordTwoEl.innerHTML=passwordTwo
passwordOneEl.style.backgroundColor='springgreen'
passwordTwoEl.style.backgroundColor='springgreen'*/




let characters="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let passwordLength=15;
let passwordo='';
let passwordt='';
let oneP
let twoP
for(i=0;i<passwordLength;i++){
    oneP=Math.floor(Math.random()*characters.length)
    passwordo+=characters.substring(oneP,oneP+1)
    twoP=Math.floor(Math.random()*characters.length)
    passwordt+=characters.substring(twoP,twoP+1)
}
passwordOneEl.textContent=passwordo;
passwordOneEl.style.backgroundColor='springgreen'
passwordTwoEl.textContent=passwordt;
passwordTwoEl.style.backgroundColor='springgreen'
}



