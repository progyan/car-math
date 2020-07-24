let carMove = 0;

function moveTo(n){
    carMove = parseInt(n);
    let car = document.getElementById('car');
    let rect = document.getElementById(n.toString()).getBoundingClientRect();
    car.style.left = (rect.left - 10) + 'px';
}

function mark(n, color){
    document.getElementById(n.toString()).style.color = color;
}

function show(text){
    document.getElementById('message').innerHTML += text;
}

function logNum(text){
    document.getElementById('num').innerHTML = text;
}

function moveBy(n){
    moveTo(carMove + n);
}

let boris;

const n1 = parseInt(localStorage.getItem('n1'));
const n2 = parseInt(localStorage.getItem('n2'));

function queryBoris(){
    boris = parseInt(prompt(n1 + ' + ' + n2 + ' = ?'));
    mark(boris, 'orange');
}

if(localStorage.getItem('player') == '!'){
    queryBoris();
    setTimeout(() => {
        moveTo(n1);
        mark(n1, 'dodgerblue');
        show(n1.toString());

        setTimeout(() => {show(' + ' + n2.toString())}, 3000);

        let interval;
        setTimeout(() => {interval = setInterval(() => {
            if(carMove < n1 + n2)
                moveBy(1);
            logNum(carMove - n1);
            if(carMove == n1 + n2){
                mark(n1 + n2, 'yellowgreen');
                if(boris){
                    if(boris != n1 + n2){
                        mark(boris, 'orangered');
                        mark(n1 + n2, 'orange');
                        mark(n1, 'black');
                    }
                }
                setTimeout(() => {show(' = ' + (n1 + n2))}, 1000);
                setTimeout(() => {window.location.href = '../select/index.html'}, 6000);
                clearInterval(interval);
            }
        }, 1000)}, 3000); 
    }, 2500);
    throw new Error("lol... i stopped program execution :)");
}

moveTo(n1);
mark(n1, 'dodgerblue');
show(n1.toString());

setTimeout(() => {show(' + ' + n2.toString())}, 3000);

let interval;
setTimeout(() => {interval = setInterval(() => {
    if(carMove < n1 + n2)
        moveBy(1);
    logNum(carMove - n1);
    if(carMove == n1 + n2){
        mark(n1 + n2, 'yellowgreen');
        if(boris){
            if(boris != n1 + n2){
                mark(boris, 'orangered');
                mark(n1 + n2, 'orange');
                mark(n1, 'black');
            }
        }
        setTimeout(() => {show(' = ' + (n1 + n2))}, 1000);
        setTimeout(() => {window.location.href = '../select/index.html'}, 6000);
        clearInterval(interval);
    }
}, 1000)}, 3000); 