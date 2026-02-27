const mainer = document.querySelector('mainer')

const mainContainer = document.createElement('div')
mainContainer.className = 'main-container'

const bgImage = document.createElement('img')
bgImage.src = '/bg-trips-3.jpg'
bgImage.className = "hero-bg"

const heroContent = document.createElement('div')
heroContent.className = "hero-content"

const heroTitle = document.createElement('h2')
heroTitle.textContent = "Discover Hidden Travel Gems"
const heroDescription1 = document.createElement('p')
heroDescription1.textContent = "Explore breathtaking destinations off the beaten path."
const heroDescription2 = document.createElement('p')
heroDescription2.textContent = "Find secret beaches, quiet villages, and unforgettable experiences."

heroContent.appendChild(heroTitle)
heroContent.appendChild(heroDescription1)
heroContent.appendChild(heroDescription2)

mainContainer.appendChild(bgImage)
mainContainer.appendChild(heroContent)

mainer.appendChild(mainContainer)