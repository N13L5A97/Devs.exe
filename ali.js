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

//fetch Fayaaz Data
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


const createViewElements = async () => {
  const data = await combineFunction();

  data.forEach((member) => {
    const dataString = JSON.stringify(member, null, 2);

    // Creating elements...
    const view = document.createElement("section");
    view.classList.add("view");
    view.id = member.firstName;

    // Adding classes...
    const title = document.createElement("section");
    title.classList.add("title");

    const pathName = document.createElement("h2");
    pathName.innerHTML = `C:\\Windows\\system32\\${member.firstName}.exe`;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");

    const minusButton = document.createElement("button");
    const fillButton = document.createElement("button");
    const closeButton = document.createElement("button");

    const minusImage = document.createElement("img");
    minusImage.src = "./assets/minButton.png";
    minusImage.alt = "minus button";

    const fillImage = document.createElement("img");
    fillImage.src = "./assets/fillButton.png";
    fillImage.alt = "fill button";

    const closeImage = document.createElement("img");
    closeImage.src = "./assets/closeButton.png";
    closeImage.alt = "close button";

    const dataContainer = document.createElement("article");
    dataContainer.classList.add("dataContainer");

    const userData = document.createElement("pre");
    userData.innerHTML = dataString;

    minusButton.appendChild(minusImage);
    fillButton.appendChild(fillImage);
    closeButton.appendChild(closeImage);

    dataContainer.appendChild(userData);

    title.appendChild(pathName);
    title.appendChild(buttonContainer);

    buttonContainer.appendChild(minusButton);
    buttonContainer.appendChild(fillButton);
    buttonContainer.appendChild(closeButton);

    view.appendChild(title);
    view.appendChild(dataContainer);

    const main = document.querySelector("main");
    main.appendChild(view);

    const randomLeft = Math.floor(Math.random() * 49);
    const randomTop = Math.floor(Math.random() *38);

    view.style.left = `${randomLeft}%`;
    view.style.top = `${randomTop}%`;

    closeButton.addEventListener("click", () => {
      view.style.display = "none";
    });

    view.addEventListener("click", () => {
      view.style.zIndex++;
    });

    let isFull = false;

    fillButton.addEventListener("click", () => {
      const view = document.getElementById(member.firstName);
      const dataContainer = view.querySelector(".dataContainer");

      if (isFull === false) {
        isFull = true;
        dataContainer.classList.add("fullScreen");
        view.classList.add("fullScreen");
      } else {
        isFull = false;
        dataContainer.classList.remove("fullScreen");
        view.classList.remove("fullScreen");

        const randomLeft = Math.floor(Math.random() * 49);
        const randomTop = Math.floor(Math.random() * 38);

        view.style.left = `${randomLeft}%`;
        view.style.top = `${randomTop}%`;
      }
    });
  });
};

const createIcon = async () => {
  const data = await combineFunction();

  data.forEach((member) => {
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

    const randomLeft = Math.floor(Math.random() * 75);
    const randomTop = Math.floor(Math.random() * 75);

    imgContainer.style.left = `${randomLeft}%`;
    imgContainer.style.top = `${randomTop}%`;

    imgContainer.addEventListener("click", () => {
      const selectedContainers = document.querySelectorAll(".imgContainer");
      selectedContainers.forEach(container => {
        if (container !== imgContainer) {
          container.classList.remove("active");

        }
      });
      imgContainer.classList.add("active");

    });

    imgContainer.addEventListener("dblclick", (event) => {
      event.stopPropagation(); 

      const viewId = imgContainer.id;
      const view = document.getElementById(viewId);

      if (view.style.display !== "block") {
        view.style.display = "block";

        view.querySelector(".buttonContainer button:last-child").addEventListener("click", () => {
          imgContainer.classList.remove("fullScreen");
          imgContainer.querySelector(".fileName").classList.add("fileName");
        });
      }
    });
  });
};

createViewElements();
createIcon();