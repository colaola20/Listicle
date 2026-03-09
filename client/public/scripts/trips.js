const renderTrips = async () => {
    const response = await fetch('/trips')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')
    if (data) {

        data.map(trip => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            topContainer.style.backgroundImage = `url(${trip.imageurl})`

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            const locationName = document.createElement('h3')
            locationName.textContent = trip.locationname
            bottomContainer.appendChild(locationName)

            const countryInfo = document.createElement('h5')
            countryInfo.textContent = `Country: ${trip.country}`
            bottomContainer.appendChild(countryInfo)

            const tripDescription = document.createElement('p')
            tripDescription.textContent = trip.description
            bottomContainer.appendChild(tripDescription)

            const readMore = document.createElement('button')
            readMore.textContent = "ReadMore"
            readMore.addEventListener('click', () => {
                window.location = `/trips/${trip.id}`
            })
            bottomContainer.appendChild(readMore)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    } else {
        const errorText = document.createElement('h2')
        errorText.textContent = "No Trips Available :("
        mainContent.appendChild(errorText)
    }
}

const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
} else {
    renderTrips()
}

