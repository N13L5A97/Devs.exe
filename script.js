//fetch Sena Data
const senaData = async () => {
  try {
    const data = await fetch(
        "https://raw.githubusercontent.com/Sensinki/web-app-from-scratch-2324/main/docs/assets/script/about.json"
    ).then((res) => res.json());
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

//fetch Sena Data
const fayaazData = async () => {
  try {
    const data = await fetch(
        "https://raw.githubusercontent.com/Fayaaz036/WAPS/master/data.json"
    ).then((res) => res.json());
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

//fetch Niels data
const nielsData = async () => {
  try {
    const data = await fetch(
        "https://raw.githubusercontent.com/N13L5A97/web-app-from-scratch-2324/main/public/assets/data/data.json"
    ).then((res) => res.json());
    // console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// fetch Ali data
const aliData = async () => {
  try {
    const data = await fetch('https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/scripts/data.json')
        .then((res) => res.json());

    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// fetch Ufuk data
const ufukData = async () => {
  try {
    const data = await fetch('https://raw.githubusercontent.com/h1bba/web-app-from-scratch-2324/main/data/info.json')
        .then((res) => res.json());

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// this is by copilot
// put members data in one array
const combineFunction = async () => {
  try{
    const combinedData = await Promise.all([senaData(), nielsData(), aliData(), ufukData(), fayaazData()]);

    console.log(combinedData);

    return combinedData;
  } catch (error){
    console.error("Error combining data:", error);
  }
};

let z = 1;

const createViewElements = async () => {
  try{
    const data = await combineFunction();
    // console.log(data);

    data.forEach((member) => {
      const dataString = JSON.stringify(member, null, 2);

      // create section element (view)
      const view = document.createElement("section");
      view.classList.add("view");
      view.id = member.firstName;

      // create section element (title)
      const title = document.createElement("section");
      title.classList.add("title");

      // create h2 element
      const pathName = document.createElement("h2");
      pathName.innerHTML = `C:\\Windows\\system32\\${member.firstName}.exe`;

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
      userData.innerHTML = dataString;

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

      //give view random position

      const randomLeft = Math.floor(Math.random() * 49);
      const randomTop = Math.floor(Math.random() *38);

      view.style.left = `${randomLeft}%`;
      view.style.top = `${randomTop}%`;

      // when close button pressed close the right view
      //little help from copilot
      closeButton.addEventListener("click", () => {
        view.style.display = "none";
      });

      // when view is clicked bring to front
      view.addEventListener("click", () => {
        //z index + 1
        view.style.zIndex = z;
        z++;
      });


      // when fill button is pressed fill the right view
      let isFull = false;

      fillButton.addEventListener("click", () => {
        if (isFull === false) {
          //find the right view and dataContainer
          const view = document.getElementById(member.firstName);
          const dataContainer = document
              .getElementById(member.firstName)
              .querySelector(".dataContainer");

          isFull = true;
          console.log(isFull);

          dataContainer.style.height = "100vh";
          dataContainer.style.width = "99vw";
          view.style.left = "0";
          view.style.top = "0";
          // console.log(member.firstName);
        } else {
          //find the right view and dataContainer
          const view = document.getElementById(member.firstName);
          const dataContainer = document
              .getElementById(member.firstName)
              .querySelector(".dataContainer");

          isFull = false;
          console.log(isFull);

          dataContainer.style.height = "50vh";
          dataContainer.style.width = "50vw";

          const randomLeft = Math.floor(Math.random() * 49);
          const randomTop = Math.floor(Math.random() * 38);

          view.style.left = `${randomLeft}%`;
          view.style.top = `${randomTop}%`;
        }
      });
    });
  } catch (error){
    console.error("Error creating view elements:", error);
  }
};

const createIcon = async () => {
  try{
    const data = await combineFunction();
    // console.log(data[1].firstName);

    data.forEach((member) => {
      console.log(member.avatar_url);

      const imgContainer = document.createElement("article");
      imgContainer.classList.add("imgContainer");
      imgContainer.id = member.firstName;

      const avatar = document.createElement("img");
      avatar.src = member.avatar_url;
      avatar.alt = "avatar";
      avatar.classList.add("avatar");

      const fileName = document.createElement("p");
      fileName.classList.add("fileName");
      fileName.innerHTML = `${member.firstName}.exe`;

      imgContainer.appendChild(avatar);
      imgContainer.appendChild(fileName);

      const main = document.querySelector("main");
      main.appendChild(imgContainer);

      //random position for the icon
      // little help from copilot
      const randomLeft = Math.floor(Math.random() * 75);
      const randomTop = Math.floor(Math.random() * 75);

      imgContainer.style.left = `${randomLeft}%`;
      imgContainer.style.top = `${randomTop}%`;

      const startButton = document.querySelector("#startButton");
      startButton.addEventListener("click", () => {
        const randomLeft = Math.floor(Math.random() * 75);
        const randomTop = Math.floor(Math.random() * 75);

        imgContainer.style.left = `${randomLeft}%`;
        imgContainer.style.top = `${randomTop}%`;
      });

      //when icon is double clicked open the right view
      // little help from copilot
      imgContainer.addEventListener("dblclick", () => {
        // console.log(imgContainer.id);
        const view = document.getElementById(imgContainer.id);
        view.style.display = "block";
        view.style.zIndex = z;
        z++;

      });
    });
  } catch (error){
    console.error("Error creating icon:", error);
  }
};

createViewElements();
createIcon();
