const iceCreamArray = ["Chocoloate", "Vanilla", "Rocky Road"];

function listMaker() {

  const ul = document.createElement("ul");
  iceCreamArray.forEach(function(iceCream) {
    const li = document.createElement("li");
    li.append(iceCream);
    ul.append(li);
});
  document.body.append(ul);
}

window.addEventListener("load", listMaker);