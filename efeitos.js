let v = [document.getElementById('html')];
v.push(document.getElementById('js'));
v.push(document.getElementById('hard'));
v.push(document.getElementById('py'));

v[0].addEventListener('mouseout',out1);
v[1].addEventListener('mouseout',out2);
v[2].addEventListener('mouseout',out3);
v[3].addEventListener('mouseout',out4);
v[0].addEventListener('mouseenter',enter1);
v[1].addEventListener('mouseenter',enter2);
v[2].addEventListener('mouseenter',enter3);
v[3].addEventListener('mouseenter',enter4);


function out1(){
    v[0].style.transitionDuration = '1s';
    v[0].style.width = '190px';
}
function out2(){
    v[1].style.transitionDuration = '1s';
    v[1].style.width = '190px';
}
function out3(){
    v[2].style.transitionDuration = '1s';
    v[2].style.width = '190px';
}
function out4(){
    v[3].style.transitionDuration = '1s';
    v[3].style.width = '190px';
}

function enter1(){
    v[0].style.transitionDuration = '1s';
    v[0].style.width = '270px';    
}
function enter2(){
    v[1].style.transitionDuration = '1s';
    v[1].style.width = '270px';    
}
function enter3(){
    v[2].style.transitionDuration = '1s';
    v[2].style.width = '270px';    
}
function enter4(){
    v[3].style.transitionDuration = '1s';
    v[3].style.width = '270px';    
}
