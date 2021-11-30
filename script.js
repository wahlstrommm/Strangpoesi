


let root = document.getElementById("root");





list =["går","hälsade","jag","visste","om","senare","alltid","när","stan","ko","såg","i","sällan","fes","ramla"];

add()

function add(){
    
    for(i=0;i<list.length; i++){
        //var div1 = document.getElementById("div1").innerHTML += "<button>" + list[i] + "</button>";
        var btn = document.createElement("button").innerHTML +=  list[i].value;
        console.log(btn.value);
    }
}

