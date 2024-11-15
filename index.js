let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");

let counter = document.getElementById("count-el");

let entries = document.getElementById("save-el");

let count = 0;

incrementBtn.onclick = function increment(){
  count = count + 1
  counter.textContent = count
}

saveBtn.onclick = function save(){
  entries.textContent = entries.textContent + " "+counter.textContent + "-"
  counter.textContent = 0
}



