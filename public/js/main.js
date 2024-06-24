const movies = [
    {
        id: 1,
        title: "Film 1",
        poster: "https://placehold.co/200x300",
        genre: ["Action", "Adventure"],
        releaseDate: "2024-01-01",
        director: "Sutradara 1",
        synopsis: "Sinopsis film 1..."
    },
    {
        id: 2,
        title: "Film 2",
        poster: "https://placehold.co/200x300",
        genre: ["Comedy", "Drama"],
        releaseDate: "2024-02-02",
        director: "Sutradara 2",
        synopsis: "Sinopsis film 2..."
    },
    // Tambahkan data film lainnya di sini
];

const moviesElement = document.querySelector('.movies');

movies.forEach(movie => {
    const movieHTML = `
        <div class="movie">
            <h2>${movie.title}</h2>
            <img src="${movie.poster}" alt="${movie.title}">
            <p>Genre: ${movie.genre.join(', ')}</p>
            <p>Rilis: ${movie.releaseDate}</p>
            <p>Sutradara: ${movie.director}</p>
            <p>Sinopsis: ${movie.synopsis}</p>
        </div>
    `;

    moviesElement.innerHTML += movieHTML;
});
