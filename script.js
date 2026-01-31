const inputText = document.querySelector("#inputText");
const btn = document.querySelector(".btn");
const mainBox = document.querySelector(".mainBox");

let editElement = null;

const inputValueFunc = () => {
  const inputValue = inputText.value;

  if (inputValue.trim() === "") {
    alert("Please enter a list..!");
    return;
  }
  // create logic
  let elem = document.createElement("div");
  elem.classList = "box";
  elem.innerHTML = `
    <p class="para">${inputValue}</p>
    <button class="btn3">Edit</button>
    <button class="btn2">Delete</button>
 `;

  // edit
  let btn3 = elem.querySelector(".btn3");
  btn3.addEventListener("click", () => {
    inputText.value = elem.querySelector(".para").innerText; // para ke under jo text hai
    //elem.querySelector(".para") = <p class="para">jo bhi likha ho</p>
    // elem = whole div element

    editElement = elem;
    btn.innerText = "Update";
  });

  if (editElement) {
    editElement.querySelector(".para").innerText = inputText.value;// or inputValue
    editElement = null;
    btn.innerText = "Add";
    inputText.value = "";
    return;
  }

  // delete logic
  let btn2 = elem.querySelector(".btn2");
  btn2.addEventListener("click", () => {
    elem.remove();
  });

  mainBox.append(elem);
  inputText.value = ""; // optional: clear input
};

btn.addEventListener("click", inputValueFunc);
