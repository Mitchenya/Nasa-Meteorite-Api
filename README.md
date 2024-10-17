# NASA Meteorite Tracking Website

Welcome to the **NASA Meteorite Tracking Website** project! This web application allows users to view and explore meteorite landings around the world using NASA's Open Data API.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- **Real-time Meteorite Data:** Fetches data from NASA's open API for meteorite landings.
- **Map Integration:** Visualise meteorite landings on a global map using an interactive interface.
- **Search Functionality:** Allows users to search for meteorites based on year, mass, and location.
- **Responsive Design:** Fully responsive and works across multiple device sizes.

## Technologies Used

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6)
  - Tailwind CSS
  - Mapbox (for map integration)
  
- **Backend:**
  - Node.js
  
- **API:**
  - NASA Open Data API (https://data.nasa.gov/)

## Installation

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Mitchenya/Nasa-Meteorite-Api.git
    cd Nasa-Meteorite-Api
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    The app will be accessible at `http://localhost:3000`.

## Usage

1. **View Meteorite Data:**
   - Once the app is running, navigate to the map to see meteorite landings displayed as markers.
   
2. **Search Meteorites:**
   - Use the search feature to filter meteorite data by year, mass, or location.

## API Endpoints

This project consumes NASA's Meteorite Landings dataset through their open API.

- **Base URL:**
  `https://data.nasa.gov/resource/gh4g-9sfh.json`

- **Query Parameters:**
  - `year`: Filter by year of landing (e.g., `?year=1990`).
  - `mass`: Filter by the mass of the meteorite (e.g., `?mass__gt=1000` for meteorites greater than 1kg).
  - `location`: Filter by the location of landing.

For more details, refer to NASA's official documentation [here](https://data.nasa.gov/).

## License

Distributed under the MIT License. See `LICENSE` for more information.
