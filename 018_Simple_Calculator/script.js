const display = document.getElementById("display");

function appendinput(val) {
    display.value += val;
}

function clearp (){
    display.value = "";
}
function cal() {
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}