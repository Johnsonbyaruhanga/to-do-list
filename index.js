let inputBox = document.querySelector("#inputBox");
let list = document.querySelector("#list");
inputBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addItem();
    inputBox.value = "";
  }
});

function addItem() {
  //inputBoxValue = inputBox.value;
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  li.innerHTML = `${inputBox.value};
  <span>
  <i class="fa-solid fa-pen-to-square"></i>
       <i class="fa-solid fa-square-check"></i>
       <i class="fa-solid fa-delete-left"></i>
  </span>`;

  list.appendChild(li);

  const editIcon = li.querySelector(".fa-pen-to-square");
  editIcon.addEventListener("click", function () {
    if (newli !== null && newli.trim() !== "") {
      editIcon.classList = newli;
    }
  });
  

  const checkIcon = li.querySelector(".fa-square-check");
  checkIcon.addEventListener("click", function () {
    checkIcon.classList.toggle("checked");
    console.log(" check");
  });

  const deleteIcon = li.querySelector(".fa-delete-left");
  deleteIcon.addEventListener("click", function () {
    li.remove();
    console.log("delete");
  });


function loadFromLocalStorage() {
  inputBoxValue = inputBox.value;
  let storedValues = localStorage.getItem('list');
  if (storedValues !== null) {
    let listArray = JSON.parse(storedValues);
    listArray.push(inputBoxValue);
    localStorage.setItem('list', JSON.stringify(listArray));
  } else {
    listArray = [inputBoxValue];
    localStorage.setItem('list', JSON.stringify(listArray));
  }
}

loadFromLocalStorage();
}
