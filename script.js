let root = document.getElementById("root");
let div1 = document.getElementById("div1");
let btnPrint = document.getElementById("btnPrint");
let btnDel = document.getElementById("btnDel");
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
  div1.append(text);
});

btnDel.addEventListener("click", () => {
  div1.innerText = "";
});
