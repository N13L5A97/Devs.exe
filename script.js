async function senaData() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/Sensinki/web-app-from-scratch-2324/main/docs/assets/script/about.json");
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

senaData();

// console.log("hi");
// fetch("https://raw.githubusercontent.com/Sensinki/web-app-from-scratch-2324/main/docs/assets/script/about.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error("Error fetching data:", error));
