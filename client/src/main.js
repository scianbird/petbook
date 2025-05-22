console.log("hello from main.js");

const myForm = document.querySelector("#my_form"); // trying query selector this time around

function handleSubmit(event) {
  event.preventDefault(); // I need to prevent the URL showing the information that is submitted. I also need to clear the form after submission

  const formData = new FormData(myForm); // UPDATE

  const formValues = Object.fromEntries(formData);

  fetch("http://localhost:8081/testing_table", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  console.log(formValues);
}

myForm.addEventListener("submit", handleSubmit);

async function getNewGuy() {
  const response = await fetch("http://localhost:8081/testing_table");
  const staff = await response.json();
  console.log(staff);
  return staff;
}

function createGuyElements(arrayofdata) {
  arrayofdata.forEach((item) => {
    //create new elements
    const guyName = document.createElement("h2");
    const guyCodename = document.createElement("p");
    const guyNumber = document.createElement("p");

    //update content values
    guyName.textContent = item.name;
    guyCodename.textContent = item.codename;
    guyNumber.textContent = item.number;

    //append to the DOM
    const staffSection = document.getElementById("text_box");
    staffSection.appendChild(guyName);
    staffSection.appendChild(guyCodename);
    staffSection.appendChild(guyNumber);
  });
}

async function renderData() {
  const guyData = await getNewGuy();
  console.log(guyData);
  createGuyElements(guyData);
}

renderData();
