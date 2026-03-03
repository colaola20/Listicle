const renderTrip = async () => {
    const requestedId = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/trips')
    const data = await response.json()
    console.log(response)
    console.log(data)

    const tripContent = document.getElementById('trip-content')
    let trip = null;
    if (data) {
        trip = data.find(trip => trip.id === requestedId)
    }
    if (trip) {
        document.getElementById('image').src = trip.imageURL
        document.getElementById('name').textContent = trip.locationName
        document.getElementById('submittedBy').textContent = trip.submittedBy
        document.getElementById('type').textContent = trip.type
        document.getElementById('description').textContent = trip.description
        document.getElementById('tip').textContent = `Tip: ${trip.tip}`
    } else {
        if (tripContent) {
            const message = document.createElement('h2')
            message.textContent="No Trips Available yet :("
            tripContent.appendChild(message)
        }
    }
    
}

renderTrip()