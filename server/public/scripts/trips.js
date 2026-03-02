const renderGifts = async () => {
    const response = await fetch('/trips')
    console.log(response)
    const data = await response.json()
    console.log(data)

    const mainContent = document.getElementById('main-content')
    if (data) {

        data.map(trip => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            topContainer.style.backgroundImage = `url(${trip.imageURL})`

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            const locationName = document.createElement('h3')
            locationName.textContent = trip.locationName
            bottomContainer.appendChild(locationName)
            const tripDescription = document.createElement('p')
            tripDescription.textContent = trip.description
            bottomContainer.appendChild(tripDescription)

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


renderGifts()