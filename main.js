// src/main.js
/* import './styles/style.css' */
import { initSearchSection } from './src/components/SearchSection.js'
import { renderUserSection } from './src/components/UserSection.js'

const cardsContainer = document.getElementById('cards-container')
const toggleBtn = document.getElementById('toggle-btn')

let darkMode = false

const API_KEY = 'ElxjxqYpf7giZpF9Xx1c0rsnB6cjhV_STxe5a3pekaI'
const API_URL = 'https://api.unsplash.com/search/photos'

const loadImages = (query = 'dog') => {
  fetch(`${API_URL}?query=${query}&client_id=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      cardsContainer.innerHTML = ''

      if (data.results.length === 0) {
        loadImages('cats')
        alert('No results found, showing cats instead.')
      } else {
        data.results.forEach((photo) => {
          const card = document.createElement('div')
          card.className = 'card'

          const img = document.createElement('img')
          img.src = `${photo.urls.raw}&w=300&h=450&fit=crop`
          img.alt = photo.alt_description || 'No description'
          card.appendChild(img)

          const title = document.createElement('h2')
          let titleText = photo.description || 'No title'
          if (titleText.length > 100) {
            titleText = titleText.substring(0, 100) + '  ...'
          }
          title.textContent = titleText
          card.appendChild(title)

          const description = document.createElement('p')
          description.textContent = photo.alt_description || 'No description'
          card.appendChild(description)

          // Use the UserSection component
          const userInfo = renderUserSection(photo)
          card.appendChild(userInfo)

          cardsContainer.appendChild(card)
        })
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
      alert('Something went wrong. Please try again later.')
    })
}

// Initialize the search section
initSearchSection(loadImages)

loadImages()

// Toggle dark mode
toggleBtn.addEventListener('click', () => {
  darkMode = !darkMode
  if (darkMode) {
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
  }
})
