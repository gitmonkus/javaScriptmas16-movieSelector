const ageSelector = document.getElementById("age-selector")
const genreSelector = document.getElementById("genre-selector")
const rating = document.getElementById("rating")
const btn = document.getElementById("btn")
const suggestedMovie = document.getElementById("suggested-movie")

const playClip = document.getElementById("play-clip")


// Play Clip
let whichClip 
let audio
playClip.addEventListener('click', playClipF)
function playClipF() {
    audio = new Audio(whichClip)
    audio.volume = '0.4'
    audio.play()  
}

const moviesArr = [
    {
        name: "Die Hard",
        age: "18+",
        genre: "Action",
        img: "img/diehard.png",
        audio: "audio/diehard.mp3",
        alt: "Die hard movie poster",
        rating: "8.2/10"  
    },
    {
        name: "Love Actually",
        age: "18+",
        genre: "Romance",
        img: "img/loveactually.png",
        audio: "audio/loveactually.mp3",
        alt: "Love actually movie poster",
        rating: "7.6/10" 
    },
    {
        name: "Trading Places",
        age: "18+",
        genre: "Comedy",
        img: "img/tradingplaces.png",
        audio: "audio/tradingplaces.mp3",
        alt: "Trading Places movie poster",
        rating: "7.5/10" 
    },
    {
        name: "The Polar Express",
        age: "PG",
        genre: "Action",
        img: "img/polarexpress.png",
        audio: "audio/polarexpress.mp3",
        alt: "Polar Express movie poster",
        rating: "6.6/10" 
    },
    {
        name: "Shrek",
        age: "PG",
        genre: "Romance",
        img: "img/shrek.png",
        audio: "audio/shrek.mp3",
        alt: "Shrek movie poster",
        rating: "7.9/10" 
    },
    {
        name: "ELF",
        age: "PG",
        genre: "Comedy",
        img: "img/elf.png",
        audio: "audio/elf.mp3",
        alt: "Elf movie poster",
        rating: "7.0/10" 
    }

]

function imgAudio(age, genre) {
    for (let movie in moviesArr) {
        if (age === moviesArr[movie].age && genre === moviesArr[movie].genre) {
            suggestedMovie.innerHTML = `<img src="${moviesArr[movie].img}" alt="${moviesArr[movie].alt}">`
            whichClip = moviesArr[movie].audio
            rating.textContent = moviesArr[movie].rating  
            break
        } 
    }
}

btn.addEventListener('click', selectMovie)
function selectMovie() {
    imgAudio(ageSelector.value, genreSelector.value)
}







// Task: 
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals: 
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc. 
