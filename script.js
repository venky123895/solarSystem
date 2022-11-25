const planetlist=document.getElementById('planetList');
const planetcontainer=document.getElementById('planetContainer');
const errormessage=document.getElementById('errorMessage');
const images=document.querySelector('.image');
const planetname=document.getElementById('planet');
const weight=document.getElementById('weight');

planetlist.addEventListener('change',function(event){
    if(!planetlist.value){
        planetcontainer.style.display='none';
        errormessage.style.display='flex';

    }
    else{
        planetcontainer.style.display='flex';
        errormessage.style.display='none';
        images.src=`https://raw.githubusercontent.com/geeksterin/WebAssignment/main/4-Advance-JS/404-Mini-Project-Solar%20System/AdvanceJS-404-01/ProjectImage/${planetlist.value}.png`;
        planetname.innerText=` ${planetlist.value} `;
    }
})
const massinput=document.getElementById('massInput');
const clickbutton=document.getElementById('clickButton');

const surfaceGravity={
    earth:1,
    jupiter:2.34,
    mars:0.38,
    mercury:0.38,
    neptune:1.12,
    saturn:0.93,
    uranus:0.92,
    venus:0.91,
    pluto:0.65,
    moon:1.62,
};
clickbutton.addEventListener('click',function(){
    let outPut=massinput.value * surfaceGravity[planetlist.value];
    weight.innerText=parseInt(outPut)+'N';
})