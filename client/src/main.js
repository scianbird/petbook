console.log("hello from main.js");

const myForm = document.querySelector("#my_form"); // trying query selector this time around

function handleSubmit(event) {
  event.preventDefault(); // I need to prevent the URL showing the information that is submitted. I also need to clear the form after submission

  const formData = new FormData(myForm); // UPDATE

  const formValues = Object.fromEntries(formData);

  fetch("http://localhost:8081/petbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  console.log(formValues);
}

myForm.addEventListener("submit", handleSubmit);

async function newUserComment() {
  const response = await fetch("http://localhost:8081/petbook");
  const petBook = await response.json();
  console.log(petBook);
  return petBook;
}

function createCommentElements(arrayofdata) {
  arrayofdata.forEach((item) => {
    //create new elements
    const userName = document.createElement("h2");
    const favouritePet = document.createElement("p");
    const userComment = document.createElement("p");

    //update content values
    userName.textContent = item.user_name;
    favouritePet.textContent = item.favourite_pet;
    userComment.textContent = item.user_comment;

    //append to the DOM
    const theCommentWall = document.getElementById("text_box");
    theCommentWall.appendChild(userName);
    theCommentWall.appendChild(favouritePet);
    theCommentWall.appendChild(userComment);
  });
}

async function renderData() {
  const commentData = await newUserComment();
  console.log(commentData);
  createCommentElements(commentData);
}

//make an array to store the images for the nav bar (similar to the assignment for week 2)

const thumbnailImages = [
  {
    image: "src/media/toad_icon.png",
    alt: "A cartoon creature.",
    class: "navbarImageClass",
    mainFrameclass: "mainFrameclass",
  },
  {
    image: "src/media/william_icon.png",
    class: "navbarImageClass",
    mainFrameclass: "mainFrameclass",
  },
  {
    image: "src/media/sandwich_icon.png",
    class: "navbarImageClass",
    mainFrameclass: "mainFrameclass",
  },
];

// the images should be in the nav bar and when users click on them, it should display the picture and related comments

const navbarBox = document.getElementById("petbook_header");

const imageFrame = document.getElementById("chosenImageBox");

thumbnailImages.forEach(function navbarDisplay(thumbnailImages) {
  let navbarimgCreate = document.createElement("img");
  navbarimgCreate.setAttribute("src", thumbnailImages.image);
  navbarimgCreate.setAttribute("class", thumbnailImages.class);
  navbarBox.appendChild(navbarimgCreate);

  function displayPageIMG() {
    imageFrame.innerHTML = "";
    text_box.innerHTML = "";
    let displayPageimgCreate = document.createElement("img");
    displayPageimgCreate.setAttribute("src", thumbnailImages.image);
    displayPageimgCreate.setAttribute("class", thumbnailImages.mainFrameclass);
    imageFrame.appendChild(displayPageimgCreate);
    renderData();
    console.log("you chose this image");
  }
  navbarimgCreate.addEventListener("click", displayPageIMG);
});
