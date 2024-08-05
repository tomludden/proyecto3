// src/components/UserSection.js
export const renderUserSection = (photo) => {
  const userInfo = document.createElement('div')
  userInfo.className = 'user-info'

  const userImg = document.createElement('img')
  userImg.src = photo.user.profile_image.small
  userImg.alt = photo.user.username
  userImg.className = 'user-img'
  userInfo.appendChild(userImg)

  const likesContainer = document.createElement('div')
  likesContainer.className = 'likes-container'

  const heartIcon = document.createElement('span')
  heartIcon.className = 'heart-icon'
  heartIcon.innerHTML = '❤️'

  const likes = document.createElement('span')
  likes.className = 'likes-count'
  likes.textContent = `${photo.likes} likes`

  likesContainer.appendChild(heartIcon)
  likesContainer.appendChild(likes)

  userInfo.appendChild(likesContainer)

  return userInfo
}
