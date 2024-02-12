const senaData = async () => {
  try {
    const data = await fetch(
      "https://raw.githubusercontent.com/Sensinki/web-app-from-scratch-2324/main/docs/assets/script/about.json"
    ).then((res) => res.json()
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const createViewElements = async () => {
  // turn data into json
  const data = await senaData();

  // stringify json
  const senaJson = JSON.stringify(data, null, 2);

  // create section element (view)
  const view = document.createElement("section");
  view.classList.add("view");

  // create section element (title)
  const title = document.createElement("section");
  title.classList.add("title");

  // create h2 element
  const pathName = document.createElement("h2");
  pathName.innerHTML = `C:\\Windows\\system32\\${data.firstName}.exe`;

  // create div element (buttonContainer)
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttonContainer");

  //create button (minusButton)
  const minusButton = document.createElement("button");

  //create button (fillButton)
  const fillButton = document.createElement("button");

  //create button (closeButton)
  const closeButton = document.createElement("button");

  //create image (minusImage)
  const minusImage = document.createElement("img");
  minusImage.src = "./assets/minButton.png";
  minusImage.alt = "minus button";

  //create image (fillImage)
  const fillImage = document.createElement("img");
  fillImage.src = "./assets/fillButton.png";
  fillImage.alt = "fill button";

  //create image (closeImage)
  const closeImage = document.createElement("img");
  closeImage.src = "./assets/closeButton.png";
  closeImage.alt = "close button";

  // create article element (dataContainer)
  const dataContainer = document.createElement("article");
  dataContainer.classList.add("dataContainer");

  const userData = document.createElement("pre");
  userData.innerHTML = senaJson;

  //put image in buttons
  minusButton.appendChild(minusImage);
  fillButton.appendChild(fillImage);
  closeButton.appendChild(closeImage);

  //put userData in dataContainer
  dataContainer.appendChild(userData);

  //put pathname and buttons in title
  title.appendChild(pathName);
  title.appendChild(buttonContainer);

  //put buttons in button container
  buttonContainer.appendChild(minusButton);
  buttonContainer.appendChild(fillButton);
  buttonContainer.appendChild(closeButton);

  view.appendChild(title);
  view.appendChild(dataContainer);

  const main = document.querySelector("main");
  main.appendChild(view);


  closeButton.addEventListener("click", closeView);
  fillButton.addEventListener("click", fillView);



};

const createIcon = async () => {
  const data = await senaData();
  console.log(data.avatar_url);

  
  const imgContainer = document.createElement("article");
  imgContainer.classList.add("imgContainer");
  imgContainer.id = data.firstName;

  const avatar = document.createElement("img");
  avatar.src = data.avatar_url;
  avatar.alt = "avatar";
  avatar.classList.add("avatar");

  const fileName = document.createElement('p')
  fileName.classList.add("fileName")
  fileName.innerHTML = `${data.firstName}.exe`;

  imgContainer.appendChild(avatar);
  imgContainer.appendChild(fileName);

  const main = document.querySelector("main");
  main.appendChild(imgContainer);


  document.getElementById("Sena").addEventListener("dblclick", openView);

}

createIcon();
createViewElements();


const openView = async () => {
  const view = document.querySelector(".view")
  //make view display auto

  view.style.display = "block";
}

const closeView = async () => {
  const view = document.querySelector(".view");
  view.style.display = "none";
  console.log("check")
}

let isFull = false;

const fillView = async () => {
  const view = document.querySelector(".view");

  if (isFull === false){
    view.style.width = "100vw";
    view.style.height = "100vh";
    view.style.maxWidth = "100vw";
    view.style.maxHeight = "100vh";

    isFull = true;
  } else {
    view.style.width = "50vw";
    view.style.height = "50vh";
    view.style.maxWidth = "50vw";
    view.style.maxHeight = "50vh";
    isFull = false;
  }

  console.log(isFull)

}