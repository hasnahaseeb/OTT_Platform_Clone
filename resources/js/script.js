document.addEventListener('DOMContentLoaded', function() {
// Sample data for demonstration
    const movies = [
        { title: "Movie 1", genre: "Action", synopsis: "Lorem ipsum dolor", id: 1 },
        { title: "Movie 2", genre: "Comedy", synopsis: "Lorem ipsum dolor", id: 2 },
        { title: "Movie 3", genre: "Thriller", synopsis: "Lorem ipsum dolor", id: 3 },
        { title: "Movie 4", genre: "Action", synopsis: "Lorem ipsum dolor", id: 4 },
        // Add more movie objects as needed
    ];


    // Function to display movies on the homepage
    function displayMovies() {
        const trendingSection = document.querySelector('.trending');
        trendingSection.innerHTML = '';
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.innerHTML = `
                <h3>${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <a href="details.html" class="details-link" data-id="${movie.id}">View Details</a>
            `;
            trendingSection.appendChild(movieElement);
        });
    }

    // Call the function to display movies when the page loads
    displayMovies();


    // Function to handle search
    function searchMovies() {
        const query = document.getElementById('search').value.toLowerCase();
        const searchResults = movies.filter(movie => movie.title.toLowerCase().includes(query));
        // Display search results
        const trendingSection = document.querySelector('.trending');
        trendingSection.innerHTML = ''; // Clear previous results
        searchResults.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie'); // Add movie class for styling
            movieElement.innerHTML = `
                <h3>${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <p>${movie.synopsis}</p>
                <a href="details.html" class="details-link" data-id="${movie.id}">View Details</a>
            `;
            trendingSection.appendChild(movieElement);
        });
    }

    // Event listener for search input
    document.getElementById('searchBtn').addEventListener('click', searchMovies);

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('details-link')) {
            event.preventDefault();
            const movieId = event.target.dataset.id;
            const movie = movies.find(movie => movie.id === movieId);
            if (movie) {
                console.log("Found movie:", movie);
                displayMovieDetails(movie);
            } else {
                console.error("Movie not found.");
            }
        }
    });

    // Function to display movie details on the details page
    function displayMovieDetails(movie) {
        console.log("Displaying movie details:", movie);
        const detailsSection = document.querySelector('.details');
        console.log("Detailssection: ", detailsSection)
        if (detailsSection) {
            detailsSection.innerHTML = `
                <h1>${movie.title}</h1>
                <p>Genre: ${movie.genre}</p>
                <p>Synopsis: ${movie.synopsis}</p>
            `;
        } else {
            console.error("Details section not found");
            console.log("Parent element:", document.querySelector('main')); // Log the parent element of .content-details for debugging
        }
    }

});