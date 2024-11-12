// A function that adds and remove the class "active" on the section you click on.

/* function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
} */

// Fetch data from the API

const responsePromise = fetch("https://jsonplaceholder.typicode.com/posts");

const dataPromise = responsePromise.then((response) => {
  return response.json();
});

//Manage the dataPromise
dataPromise.then((data) => {
  console.log(data);
  const accordion = document.querySelector(".accordion");
  for (let i = 0; i < data.length; i++) {
    let title = document.createElement("div");
    title.setAttribute("class", "section");
    title.textContent = data[i].title;

    let description = document.createElement("div");
    description.setAttribute("class", "description hide");
    description.textContent = data[i].body;

    accordion.appendChild(title);
    accordion.appendChild(description);

    title.addEventListener("click", (e) => {
      e.target.classList.toggle("active");
      description.classList.toggle("hide");
      if (description.style.maxheight) {
        title.style.maxheight = null;
        title.style.paddingTop = "10px";
        title.style.paddingBottom = "10px";
        title.style.paddingLeft = "0";
        title.style.paddingRight = "0";
        description.style.maxheight = null;
        description.style.padding = "0";
      } else {
        title.style.maxheight = title.scrollHeight + "px";
        title.style.padding = "20px";
        description.style.maxheight = description.scrollHeight + "px";
        description.style.padding = "20px";
      }
    });
  }
});

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
/* const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

const section2Element = document.getElementById("section2");
section2Element.addEventListener("click", toggle);

const section3Element = document.getElementById("section3");
section3Element.addEventListener("click", toggle); */
