const refMovie = document.querySelector('.ref');

const highlight3 = document.querySelector('.highlight3');

function openRefMovie(e){
    refMovie.classList.toggle('switch');
}


highlight3.addEventListener("click", openRefMovie);
