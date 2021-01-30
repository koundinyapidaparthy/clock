const hours=new Date().getHours();
const minutes=new Date().getMinutes();
const seconds=new Date().getSeconds();
const hoursdeg=(360/12)*hours;
const minutesdeg=(360/60)*minutes;
const secondsdeg=(360/60)*seconds;
document.querySelector(".hours").style.transform=`rotate(${hoursdeg}deg)`;
document.querySelector(".minutes").style.transform=`rotate(${minutesdeg}deg)`;
document.querySelector(".seconds").style.transform=`rotate(${secondsdeg}deg)`;
function hour(){
    const hours=new Date().getHours();
    const hoursdeg=(360/12)*hours;
    document.querySelector(".hours").style.transform=`rotate(${hoursdeg}deg)`;    
}
function mintue(){
    const minutes=new Date().getMinutes();
    const minutesdeg=(360/60)*minutes;
    document.querySelector(".minutes").style.transform=`rotate(${minutesdeg}deg)`;
}
function second(){
    const seconds=new Date().getSeconds();
    const secondsdeg=(360/60)*seconds;
    document.querySelector(".seconds").style.transform=`rotate(${secondsdeg}deg)`;
}
setInterval(hour,1000);
setInterval(mintue,1000);
setInterval(second,1000);
