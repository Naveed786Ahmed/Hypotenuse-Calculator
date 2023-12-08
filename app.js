let a,b,c;

document.getElementById("submitbutton").onclick = function(){
    a = document.getElementById("sidea").value;
    a = Number(a)
    b = document.getElementById("sideb").value;
    b = Number(b)

    c = Math.sqrt(Math.pow(a , 2) + Math.pow(b , 2))
    document.getElementById("sidec").innerHTML = "Side C: " + c;
}