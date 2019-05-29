export const createDogPark = (parkDetails) => {
  const {parkName, address, city, state, zipCode} = parkDetails

  return fetch('/api/parks/new', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      parkName: parkName.value,
      address: address.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value
    })
  })
  .then(response => {
    return response.ok ? response.json() : null
  })
}

export const getParkDetails = (id) => {
  
}
