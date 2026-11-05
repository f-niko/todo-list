import "./style.css"

const toDoList = [
  { name: "fare la spesa", fatto: false },
  { name: "ritirare il pacco amazon", fatto: false },
  { name: "portare a spasso il cane", fatto: false }
];

const input = document.createElement("input");
input.placeholder = "scrivi";

const pulsante = document.createElement("button");
pulsante.textContent = "premi";

document.body.append(input, pulsante);

pulsante.addEventListener("click", function() {
  const testo = input.value.trim();

  if (testo === "") {
    alert("Inserisci un testo!");
    return;
  }

  toDoList.push({
    name: testo,
    fatto: false
  });

  input.value = "";
  renderList();
});

function renderList() {
  const ul = document.createElement("ul");
  toDoList.forEach(function(todo) {
  const li = document.createElement("li");
  li.textContent = todo.name + " - " + (todo.fatto ? "completato" : "da fare");
  const button = document.createElement("button");
  button.textContent = todo.fatto ? "annulla" : "fatto";

    button.addEventListener("click", function() {
      todo.fatto = !todo.fatto;
      renderList();
    });

    li.append(button);
    ul.append(li);
  });

  document.querySelector("ul")?.remove();
  document.body.append(ul);
  renderTotal();
}

function renderTotal() {
  const p = document.createElement("p");

  const completati = toDoList.filter(function(todo) {
    return todo.fatto === true;
  });

  p.textContent = "Task totali: " + toDoList.length +
                  " - Completati: " + completati.length;

  document.querySelector("p")?.remove();
  document.body.append(p);
}

renderList();