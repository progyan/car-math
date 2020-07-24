let carMove = 0;
window.scrollTo(0, 0);

function moveTo(n){
    carMove = parseInt(n);
    let rect = document.getElementById(n.toString()).getBoundingClientRect();
    let car = document.getElementById('car');
    car.style.left = (rect.left) + 'px';
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
    boris = parseInt(prompt(n1 + ' x ' + n2 + ' = ?'));
    mark(boris, 'orange');
}

if(localStorage.getItem('player') == '!'){
    queryBoris();
    setTimeout(() => {
        moveTo(0);
        show(n1.toString());
        show(' x ' + n2.toString())

        let interval;
        setTimeout(() => {interval = setInterval(() => {
            if(carMove < n1 * n2)
                moveBy(n1);
            logNum(n2 - (n1 * n2 - carMove) / n1);
            if(carMove == n1 * n2){
                mark(n1 * n2, 'yellowgreen');
                if(boris){
                    if(boris != n1 * n2){
                        mark(boris, 'orangered');
                        mark(n1 * n2, 'orange');
                    }
                }
                setTimeout(() => {show(' = ' + (n1 * n2))}, 1000);
                setTimeout(() => {window.location.href = '../select/index.html'}, 6000);
                clearInterval(interval);
            }
        }, 1000)}, 3000); 
    }, 2500);
} else {
    moveTo(0);
    show(n1.toString());
    show(' x ' + n2.toString())

    let interval;
    setTimeout(() => {interval = setInterval(() => {
        if(carMove < n1 * n2)
            moveBy(n1);
        logNum(n2 - (n1 * n2 - carMove) / n1);
        if(carMove == n1 * n2){
            mark(n1 * n2, 'yellowgreen');
            if(boris){
                if(boris != n1 * n2){
                    mark(boris, 'orangered');
                    mark(n1 * n2, 'orange');
                }
            }
            setTimeout(() => {show(' = ' + (n1 * n2))}, 1000);
            setTimeout(() => {window.location.href = '../select/index.html'}, 6000);
            clearInterval(interval);
        }
    }, 1000)}, 3000); 
}