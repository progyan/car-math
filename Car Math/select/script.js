let audio = new Audio('bg.mp3');
audio.play();

document.getElementById(new Date().getDay().toString() + 'd').id = 'now';

let array = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

document.getElementById('time').innerHTML = 
    array[new Date().getDay() - 1] + 
    ', ' + 
    new Date().getHours() + 
    ':' + 
    new Date().getMinutes();

function selectMe(el){
    if(el.id != "selected"){
        if(document.getElementById('selected'))
            document.getElementById('selected').id = '';
        el.id = 'selected';
    }
    check();
}

function up(n){
    if(document.getElementById(n).innerHTML < 9){
        document.getElementById(n).innerHTML = parseInt(document.getElementById(n).innerHTML) + 1;
    } else {
        document.getElementById(n).innerHTML = 0;
    }
    check();
}

function down(n){
    if(document.getElementById(n).innerHTML > 0){
        document.getElementById(n).innerHTML = parseInt(document.getElementById(n).innerHTML) - 1;
    } else {
        document.getElementById(n).innerHTML = 9;
    }
    check();
}

function check(){
    function go(){
        document.getElementById('bo1').classList.add('can-sel');
        if(new Date().getDay() == 2 || new Date().getDay() == 6 || new Date().getDay() == 7)
            document.getElementById('bo2').classList.add('can-sel');
        else
            document.getElementById('bo2').classList.add('oops');
    }
    document.getElementById('bo1').classList.remove('can-sel');
    document.getElementById('bo2').classList.remove('can-sel');
    let n1 = parseInt(document.getElementById('1').innerHTML);
    let sign = document.getElementById('selected').innerHTML;
    let n2 = parseInt(document.getElementById('3').innerHTML);
    localStorage.setItem('n1', n1.toString());
    localStorage.setItem('sign', sign);
    localStorage.setItem('n2', n2.toString());
    if(sign == '+'){
        go()
    } else if(sign == '-'){
        if(n1 >= n2){
            go()
        } else {
            return false;
        }
    } else if(sign == 'x'){
        if(n1 * n2 < 37){
            go()
        } else {
            return false;
        }
    } else if(sign == ':'){
        if(n1 % n2 == 0){ // n1 % n2 when n2 = 0 will always result in NaN, which != 0.
            //go()
        } else {
            return false;
        }
    }
}

function go(str, el){
    let sign = localStorage.getItem('sign');
    if(!el.classList.contains('can-sel')){return false;}
    let start = new Audio('car-start.mp3');
    start.play();
    localStorage.setItem('player', str);
    let interval = setInterval(() => {
        audio.volume -= 0.06;
        if(audio.volume < 0.01){
            clearInterval(interval);
        }
    }, 100);
    if(sign == '+'){
        setTimeout(() => {window.location.href = '../addition/index.html'}, 3000);
    } else if(sign == '-'){
        setTimeout(() => {window.location.href = '../subtraction/index.html'}, 3000);
    } else if(sign == 'x'){
        setTimeout(() => {window.location.href = '../multiplication/index.html'}, 3000);
    }
}