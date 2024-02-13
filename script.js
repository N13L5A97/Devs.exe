async function fetchData() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/AliAhmed205/web-app-from-scratch-2324/main/docs/scripts/about.json');
      const data = await response.json();
  
      // Update card elements with data from JSON
      updateCardData(data);
    } catch (error) {
      console.error('Error in JSON', error);
    }
  }
  