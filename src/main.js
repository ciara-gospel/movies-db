import './style.css'

document.querySelector('#app').innerHTML = `
    <div class="hero">
        <div class="header">
          <div class="logo">
            <img src="images/hollywood-logo.png" alt="cinema" class="film">
          </div>
          <div class="menu">
            <ul>
              <li>Home</li>
              <li>Discover</li>
              <li>Movie Release</li>
              <li>Forum</li>
              <li>About</li>
            </ul>
          </div>
          <div class="buttons">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-bell"></i>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
      </div>
      <div class="first-part">
      <button class="first">series</button>
      <h1 id="title"></h1>
      <div class="second-part">
        <button class="second">
          <img src="images/play-button (1).png" alt="arrange" class="actions">
          <p>Play Now</p>
        </button>
        <button class="second">
        <img src="images/play (2).png" alt="video" class="actions">
        <p>Watch Trailer</p>
        </button>
        <button class="second">
          <img src="images/book-mark.png" alt="favor" class="actions">
          <p>Add Watchlist</p>
        </button>
      </div>
      </div>
      <section id="main">
      <div class="collaboration">
        <img src="images/disney-logo-03.png" class="application">
        <img src="images/Netflix-Logo.png" alt="logo" class="application">
        <img src="images/youtube-logo-for-popular-online-media-content-creation-website-and-application-free-png.webp" alt="logo" class="application">
        <img src="images/star wars.png" alt="logo" class="application">
        <img src="images/hbomax_logo__2024__by_amongbutt2020_dgmai4w-fullview.png" alt="logo" class="application">
        <img src="images/Pixar_Logo170x58.png" alt="logo" class="application">
        <img src="images/Marvel_logo.png" alt="logo" class="application">
      </div>
      </section>
    </div>
`
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDIzZjA4MGIxYWUwMjE2NmU4NDBkZWU0NDdjMDg2NSIsIm5iZiI6MTczMzc0Mzc5Ni44NDA5OTk4LCJzdWIiOiI2NzU2ZDRiNGNmMTgwMTk2OGYwMmYxMjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.S_uDysefgK7Ex6yNxRXNA2VkLlDCvwfXTxYDh8-7iok'
  }
}

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(res => res.json())
  .then((data) => {
    console.log(data)

    const section = document.getElementById('main')
    // make sure is inside an array
    if (Array.isArray(data.results)) {
      data.results.forEach(movie => {
        const movieCard = document.createElement('div')
        movieCard.className = 'movie-card'

        const posterPath = movie.poster_path
          ? 'https://image.tmdb.org/t/p/w500$%7Bmovie.poster_path%7D'
          : 'https://via.placeholder.com/500x750?text=No+Image+Available'

        const image = document.createElement('img')
        image.src = posterPath
        image.alt = movie.title || 'Movie Title'
        image.className = 'movie-img'
        movieCard.appendChild(image)

        const title = document.getElementById('title')
        title.textContent = movie.title || 'Unknown Title'
        title.className = 'movie-title'
        movieCard.appendChild(title)

        const rating = document.createElement('p')
        rating.innerHTML = `&#11088;${movie.vote_average || 'N/A'}`
        rating.className = 'movie-rating'
        movieCard.appendChild(rating)

        section.appendChild(movieCard)
      })
    } else {
      console.error('No movies found in the response.')
    }
  })
  .catch((err) => console.error('Error fetching movies:', err))
// setupCounter(document.querySelector('#counter'))
