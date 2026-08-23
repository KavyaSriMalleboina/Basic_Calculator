var display = "";
var display2 = "";
var add = false;
var sub = false;
var mul = false;
var div = false;
var a = 0;
var b = 0;
function number(x) {
    display = display + String(x);
    display2 = display2 + String(x);
    document.getElementById("display").innerHTML = display;
}
function clearDisplay() {
    display = "";
    document.getElementById("display").innerHTML = "";
}
function backspace() {
    display = display.slice(0, -1);
    document.getElementById("display").innerHTML = display;
}
function operation(x){
    a = parseInt(display);
    number(x);
    display2 = "";
    if(x=='+'){
        add = true;
    }
    else if(x=='-'){
        sub = true;
    }
    else if(x=='x'){
        mul = true;
    }
    else if(x=='/'){
        div = true;
    }
}
function result(){
    b = parseInt(display2);
    if(add){
        display = String(a+b);
        add = false;
    }
    else if(sub){
        display = String(a-b);
        sub = false;
    }
    else if(mul){
        display = String(a*b);
        mul = false;
    }
    else if(div){
        if(b==0){
            display = "ERROR";
        }
        else{
            display = String(a/b);
        }
        div = false;
    }
    document.getElementById("display").innerHTML = display;
    a = parseInt(display);
    display2="";
}
