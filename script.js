let root = document.getElementById("root");
let btnPrint = document.getElementById("btnPrint");
printList = [];
let text = document.createElement("p");
list = ["går", "hälsade", "jag", "visste", "om", "senare", "alltid", "när", "stan", "ko", "såg", "i", "sällan", "fes", "ramla"];

add();

function add() {
  for (i = 0; i < list.length; i++) {
    //var div1 = document.getElementById("div1").innerHTML += "<button>" + list[i] + "</button>";
    let btnlet = document.createElement("button");
    btnlet.id = list[i];
    btnlet.innerText = list[i];
    root.append(btnlet);
    btnlet.addEventListener("click", function () {
      printList.push(btnlet.innerText);
      console.log(printList);
    });
  }
}
btnPrint.addEventListener("click", function () {
  text.innerText = printList.join(" ");
  root.append(text);
});
