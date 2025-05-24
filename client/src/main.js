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
  myForm.reset(); // just a simple reset after you submit go it gives the user the visual cue that the information has "gone" somewhere
}
//I need something to reset the form .. I'm thinking about showing the results after you submit? That would add some functionality/point to collecting the "favourite pet" field in the table (and to sort of offset the fact that I can't figure out a filtering function - I considered storing who you voted for in the local data, but maybe people would want to comment more than once? Or maybe that's how I could add a delete function.. by letting you delete your vote/comment from the database and clearing the local data?)
//This entire file is a skeleton of attempted ideas .. I'M SORRY

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
    const CommentBox = document.createElement("div");
    CommentBox.setAttribute("class", "displayComments");
    const userName = document.createElement("h2");
    const favouritePet = document.createElement("p");
    const userComment = document.createElement("p");

    //update content values
    userName.textContent = item.user_name;
    favouritePet.textContent = "Voted for " + item.favourite_pet;
    userComment.textContent = item.user_comment;

    //append to the DOM
    const theCommentWall = document.getElementById("text_box");
    theCommentWall.appendChild(CommentBox);
    CommentBox.appendChild(userName);
    CommentBox.appendChild(favouritePet);
    CommentBox.appendChild(userComment);
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
    thumbnail: "src/media/toad_icon.png",
    image: "src/media/toad_framed.png",
    // commentKeyword: "toad", this was in here so that i could maybe filter in the render function, something like commentKeyword === Favourite pet" and then it would only display those = toad but .. 🤔 I still have a way to go
    alt: "A cartoon creature.",
    class: "navbarImageClass",
    mainFrameclass: "mainFrameclass",
    petname: "It's Toad!",
  },
  {
    thumbnail: "src/media/william_icon.png",
    image: "src/media/william_framed.png",
    class: "navbarImageClass",
    mainFrameclass: "mainFrameclass",
    petname: "It's William!",
  },
  {
    thumbnail: "src/media/sandwich_icon.png",
    image: "src/media/sandwich_framed.png",
    class: "navbarImageClass",
    mainFrameclass: "mainFrameclass",
    petname: "It's Jam Sandwich!",
  },
];

// the images should be in the nav bar and when users click on them, it should display the picture and related comments

const navbarBox = document.getElementById("petbook_header");

const imageFrame = document.getElementById("chosenImageBox");

thumbnailImages.forEach(function navbarDisplay(thumbnailImages) {
  let navbarimgCreate = document.createElement("img");
  navbarimgCreate.setAttribute("src", thumbnailImages.thumbnail);
  navbarimgCreate.setAttribute("class", thumbnailImages.class);
  navbarBox.appendChild(navbarimgCreate);

  function displayPageIMG() {
    imageFrame.innerHTML = "";
    text_box.innerHTML = "";
    let displayPageimgCreate = document.createElement("img");
    displayPageimgCreate.setAttribute("src", thumbnailImages.image);
    displayPageimgCreate.setAttribute("class", thumbnailImages.mainFrameclass);
    let petnameDisplay = document.createElement("h1");
    petnameDisplay.setAttribute("class", "nameClass");
    petnameDisplay.textContent = thumbnailImages.petname;
    imageFrame.appendChild(displayPageimgCreate);
    imageFrame.appendChild(petnameDisplay);

    renderData();
  }
  navbarimgCreate.addEventListener("click", displayPageIMG);
});

/* 

Sadly, due to time constraints I knew I could not continue working on/troubleshooting the below. Instead, I have preserved my attempts here. The idea was that the user could see a table with current "vote" numbers based on the favourite_pet selected. Even though I had the console.log working with the filtered data I could not figure out the final "append" .. ( ; ω ; )	tis better to have tried and failed than to never have tried at all . I GUESS
Instead I worked on the above ^ and made sure that the form gave feedback when the submission happened by resetting the form 


const gettheVoteTable = document.getElementById("TESTING");
async function seeTheVotes() {
  const response = await fetch("http://localhost:8081/petbookvotes");
  const petBookVotes = await response.json();
  console.log(petBookVotes);
  return petBookVotes;
}

seeTheVotes();

async function createVoteTable(Votes) {
  //create the elements - no need for a for each
  const Testbox = document.createElement("div");
  const petName = document.createElement("h2");
  const voteNumber = document.createElement("p");

  //update the content values
  petName.textContent =
    "test to see what part is not being made" + (await seeTheVotes());
  voteNumber.textContent =
    "test can i see this and just not the count" + Votes.count;
 */
//update the content values
/*    petName.textContent =
    "test to see what part is not being made" + Votes.favourite_pet;
  voteNumber.textContent =
    "test can i see this and just not the count" + Votes.count;
    I did this to see if the text content would be visible / if the issue lay with the appending or just getting the information from Votes.favourite pet - since I couldn't see the text either I knew there was an issue with creating/appending the elements -- I realised I didn't need this to be a "for each" as there should only be one instance of each
 */
//append to the DOM
/*   const theVoteTable = document.getElementById("TESTING");
  theVoteTable.appendChild(Testbox);
  theVoteTable.appendChild(petName);
  theVoteTable.appendChild(voteNumber);
}

async function renderTable() {
  const tableData = await gettheVoteTable;
  console.log(tableData);
  createVoteTable(tableData);
}
renderTable();
 */
// test to see what part is not being made[object Object],[object Object],[object Object] < this is probably the closest I have gotten, although it's still not ..very close. The console logging is still working though, and showing me the count!
/* (3) [{…}, {…}, {…}]
0
: 
{favourite_pet: 'Toad', count: '4'}
1
: 
{favourite_pet: 'William', count: '12'}
2
: 
{favourite_pet: 'Jam Sandwich', count: '3'}
length
: 
3
[[Prototype]]
: 
Array(0) */
