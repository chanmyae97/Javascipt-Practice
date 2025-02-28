const searchInput = document.querySelector(".search input");
let suggestionsContainer = null;
let lastApiCall = 0;
const minCallInterval = 500; // Minimum time between API calls in milliseconds

const geoApiOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

async function fetchCitySuggestions(query) {
  try {
    const currentTime = Date.now();
    if (currentTime - lastApiCall < minCallInterval) {
      return [];
    }
    lastApiCall = currentTime;

    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeURIComponent(
      query
    )}&limit=5`;
    const response = await fetch(url, geoApiOptions);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch city suggestions");
    }

    return data.data.map((city) => city.name);
  } catch (error) {
    console.error("Error fetching city suggestions:", error);
    return [];
  }
}

function createSuggestionsContainer() {
  suggestionsContainer = document.createElement("div");
  suggestionsContainer.className = "suggestions-container";
  document.querySelector(".search").appendChild(suggestionsContainer);
}

async function showSuggestions(inputValue) {
  if (!suggestionsContainer) {
    createSuggestionsContainer();
  }

  if (!inputValue || inputValue.length < 2) {
    suggestionsContainer.style.display = "none";
    return;
  }

  const cities = await fetchCitySuggestions(inputValue);

  if (cities.length === 0) {
    suggestionsContainer.style.display = "none";
    return;
  }

  suggestionsContainer.innerHTML = "";
  cities.forEach((city) => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.textContent = city;
    div.addEventListener("click", () => {
      searchInput.value = city;
      suggestionsContainer.style.display = "none";
      checkWeather(city);
    });
    suggestionsContainer.appendChild(div);
  });

  suggestionsContainer.style.display = "block";
}

// Add input event listener for real-time suggestions
searchInput.addEventListener("input", (e) => {
  showSuggestions(e.target.value);
});

// Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search")) {
    if (suggestionsContainer) {
      suggestionsContainer.style.display = "none";
    }
  }
});
