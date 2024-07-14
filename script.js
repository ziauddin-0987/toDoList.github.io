const btn = document.getElementById("btn");
const list = document.getElementById("list");
const inputs = document.getElementById("Text");

btn.addEventListener("click", () => {
  if (inputs.value == "") {
    alert("print your task");
  } else {
    const newele = document.createElement("li");
    newele.innerHTML = inputs.value;
    list.appendChild(newele);
  }
  //   document.write(inputs);
});

// console.log(inputs);
