#!/usr/bin/env node
const axios = require('axios');
const process = require('process');

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a movie ID as an argument.');
  process.exit(1);
}

// Base URL for the Star Wars API
const baseURL = 'https://swapi.dev/api/films/';

const getCharactersFromMovie = async (movieId) => {
  try {
    // Get the movie data from the Star Wars API
    const response = await axios.get(`${baseURL}${movieId}/`);

    if (response.status !== 200) {
      console.error('Failed to fetch movie data.');
      return;
    }

    // Extract the character URLs from the movie data
    const characterUrls = response.data.characters;

    // Fetch each character's data and print their name
    for (const url of characterUrls) {
      const characterResponse = await axios.get(url);

      if (characterResponse.status === 200) {
        console.log(characterResponse.data.name);
      } else {
        console.error(`Failed to fetch character data from URL: ${url}`);
      }
    }
  } catch (error) {
    console.error('An error occurred while fetching data:', error.message);
  }
};

// Fetch and display characters from the specified movie
getCharactersFromMovie(movieId);

