// src/components/SearchSection.js
export const initSearchSection = (loadImages) => {
  const searchBtn = document.getElementById('search-btn')
  const searchInput = document.getElementById('search-input')
  const headerLogo = document.getElementById('header-logo')

  const performSearch = () => {
    const query = searchInput.value.trim()
    if (query) {
      loadImages(query)
      searchInput.value = ''
    }
  }

  searchBtn.addEventListener('click', performSearch)

  searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      performSearch()
    }
  })

  const resetToLandingPage = () => {
    loadImages()
  }

  headerLogo.addEventListener('click', resetToLandingPage)
}
