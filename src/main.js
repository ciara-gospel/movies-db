import './style.css'

document.querySelector('#app').innerHTML = `
    <div class="container">
      <header>
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
      </header>
      <section id="hero-section">
      <div class="hero-container hero-images">
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
      </div>
      </section>
      <section id="logos">
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
      <section id="popular-release">
      <div class="container popular-poster">
      <div id="popular-release-poster">
      </div>
      </div>
      </section>

      <section id="just-release">
      <div class="container just-release-poster">
      <div id="just-release-poster">
      </div>
      </div>
      </section>

      <section id="watch-list">
      <div class="container watch-list-poster">
      <div id="watch-list-poster">
      </div>
      </div>
      </section>

      <section id="likes">
      <div class="container likes-poster">
      <div id="likes-poster">
      </div>
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

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(res => res.json())
  .then((data) => {
    console.log(data)

    const popularContainer = document.getElementById('popular-release-poster')
    // make sure is inside an array
    if (Array.isArray(data.results)) {
      data.results.forEach(movie => {
        const movieCard = document.createElement('div')
        movieCard.className = 'movie-card'

        const posterPath = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : 'https://via.placeholder.com/500x750?text=No+Image+Available'

        const image = document.createElement('img')
        image.src = posterPath
        image.alt = movie.title || 'Movie Title'
        image.className = 'movie-img'
        
        // movieCard.innerHTML = `
        // <div class="number">${index + 1}</div>
        // <div class="popular-poster">
        //   <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        // </div>
        // <div class="movie-detail"><div class="pg-age"> ${movie.adult ? 'R' : 'pg-13'}</div>
        // <h4 class="movie-title-popular">${movie.title}</h4>
        // <span class="movie-genre">
        // <p>${movie.genre_ids.slice(0,2).join('') || 'unknown genre'}</p>
        // </span>
        // <p class="movie-star">&#11088${movie.vote_average.toFixed (1)}</p>
        // </div>
        

        // `
        
        const movieDetail = document.createElement('div')
        movieDetail.textContent = movie.title || 'Unknown Title'
        movieDetail.className = 'movie-title-popular'

        const title = document.createElement('h3')
        title.textContent = movie.title || 'Unknown Title'
        title.className = 'movie-title-popular'
        

        const rating = document.createElement('p')
        rating.innerHTML = `&#11088;${movie.vote_average || 'N/A'}`
        rating.className = 'movie-rating'
        

        popularContainer.appendChild(movieCard)
        movieCard.appendChild(image)
        movieCard.appendChild(movieDetail)
        movieDetail.appendChild(title)
        movieDetail.appendChild(rating)

      })
    } else {
      console.error('No movies found in the response.')
    }
  })
  .catch((err) => console.error('Error fetching movies:', err))

  const options1 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDIzZjA4MGIxYWUwMjE2NmU4NDBkZWU0NDdjMDg2NSIsIm5iZiI6MTczMzc0Mzc5Ni44NDA5OTk4LCJzdWIiOiI2NzU2ZDRiNGNmMTgwMTk2OGYwMmYxMjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.S_uDysefgK7Ex6yNxRXNA2VkLlDCvwfXTxYDh8-7iok'
  }
}

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options1)
  .then(res => res.json())
  .then((data) => {
    console.log(data)

    const popularContainer = document.getElementById('just-release-poster')
    // make sure is inside an array
    if (Array.isArray(data.results)) {
      data.results.forEach(movie => {
        const movieCard = document.createElement('div')
        movieCard.className = 'movie-card2'

        const posterPath = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : 'https://via.placeholder.com/500x750?text=No+Image+Available'

        const image = document.createElement('img')
        image.src = posterPath
        image.alt = movie.title || 'Movie Title'
        image.className = 'movie-img2'

        const title = document.createElement('h3')
        title.textContent = movie.title || 'Unknown Title'
        title.className = 'movie-title'

        const rating = document.createElement('p')
        rating.innerHTML = `&#11088;${movie.vote_average || 'N/A'}`
        rating.className = 'movie-rating'

        popularContainer.appendChild(movieCard)
        movieCard.appendChild(image)
        movieCard.appendChild(title)
        movieCard.appendChild(rating)
      })
    } else {
      console.error('No movies found in the response.')
    }
  })
  .catch(err => console.error(err))

const options2 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDIzZjA4MGIxYWUwMjE2NmU4NDBkZWU0NDdjMDg2NSIsIm5iZiI6MTczMzc0Mzc5Ni44NDA5OTk4LCJzdWIiOiI2NzU2ZDRiNGNmMTgwMTk2OGYwMmYxMjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.S_uDysefgK7Ex6yNxRXNA2VkLlDCvwfXTxYDh8-7iok'
  }
}

fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options2)
  .then(res => res.json())
  .then((data) => {
    console.log(data)

    const popularContainer = document.getElementById('watch-list-poster')
    // make sure is inside an array
    if (Array.isArray(data.results)) {
      data.results.forEach(movie => {
        const movieCard = document.createElement('div')
        movieCard.className = 'movie-card4'
    
        const posterPath = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : 'https://via.placeholder.com/500x750?text=No+Image+Available'

        const image = document.createElement('img')
        image.src = posterPath
        image.alt = movie.title || 'Movie Title'
        image.className = 'movie-img3'

        const title = document.createElement('h3')
        title.textContent = movie.title || 'Unknown Title'
        title.className = 'movie-title'

        const rating = document.createElement('p')
        rating.innerHTML = `&#11088;${movie.vote_average || 'N/A'}`
        rating.className = 'movie-rating'
            
    
        popularContainer.appendChild(movieCard)
        movieCard.appendChild(image)
        movieCard.appendChild(title)
        movieCard.appendChild(rating)
      })
    } else {
      console.error('No movies found in the response.')
    }
  })
  .catch(err => console.error(err))

const options3 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDIzZjA4MGIxYWUwMjE2NmU4NDBkZWU0NDdjMDg2NSIsIm5iZiI6MTczMzc0Mzc5Ni44NDA5OTk4LCJzdWIiOiI2NzU2ZDRiNGNmMTgwMTk2OGYwMmYxMjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.S_uDysefgK7Ex6yNxRXNA2VkLlDCvwfXTxYDh8-7iok'
  }
}

fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options3)
  .then(res => res.json())
  .then((data) => {
    console.log(data)

    const popularContainer = document.getElementById('likes-poster')
    // make sure is inside an array
    if (Array.isArray(data.results)) {
      data.results.forEach(movie => {
        const movieCard = document.createElement('div')
        movieCard.className = 'movie-card3'

            const posterPath = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : 'https://via.placeholder.com/500x750?text=No+Image+Available'

        const image = document.createElement('img')
        image.src = posterPath
        image.alt = movie.title || 'Movie Title'
        image.className = 'movie-img4'

        const title = document.createElement('h3')
        title.textContent = movie.title || 'Unknown Title'
        title.className = 'movie-title'

        const rating = document.createElement('p')
        rating.innerHTML = `&#11088;${movie.vote_average || 'N/A'}`
        rating.className = 'movie-rating'

        popularContainer.appendChild(movieCard)
        movieCard.appendChild(image)
        movieCard.appendChild(title)
        movieCard.appendChild(rating)
      })
    } else {
      console.error('No movies found in the response.')
    }
  })
  .catch(err => console.error(err))
// setupCounter(document.querySelector('#counter'))
