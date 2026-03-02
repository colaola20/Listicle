const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/public/trips-app-logo-transperend.webp'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'Hidden Travel Gems'

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

const headerRight = document.createElement('div')
headerRight.className = "header-right"

const homeBtn = document.createElement('button')
homeBtn.textContent = 'Home'
homeBtn.addEventListener('click', function handleClick(event) {
    window.location = '/'
})

headerRight.appendChild(homeBtn)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)