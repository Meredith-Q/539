


// voting
const voteButtons = document.querySelectorAll('.vote-btn');        
const topImg = document.getElementById('top-img');
const topMovieTitle = document.querySelector('.top .movie_title');
    
function updateTopMovie() {
    const movies = document.querySelectorAll('.movie');
    let topMovie = null;
    let maxVotes = -1;
        
    movies.forEach(movie => {
        const voteCount = parseInt(movie.querySelector('.vote-count').textContent);
        if (voteCount > maxVotes) {
            maxVotes = voteCount;
            topMovie = movie;
        }
    });
        
    if (topMovie) {
        const movieImg = topMovie.querySelector('.movie-img');
        const movieTitle = topMovie.querySelector('.movie_title').textContent;
            
        if (topImg && movieImg) {
            topImg.src = movieImg.src;
            topImg.alt = movieImg.alt;
        }
            
        if (topMovieTitle) {
            topMovieTitle.textContent = movieTitle;
        }
    }
    }
    
voteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const movieItem = this.closest('.movie');
        const voteCountElement = movieItem.querySelector('.vote-count');
                
       let currentVotes = parseInt(voteCountElement.textContent);
        currentVotes++;
        voteCountElement.textContent = currentVotes;
        this.disabled = true;
        updateTopMovie();
    });
});
    

updateTopMovie();
    
