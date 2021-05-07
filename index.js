const baseURL = 'http://localhost:3000'
const carsURL = baseURL + '/cars'

const list = document.getElementById("car-list")

const form = document.getElementById("car-form")
const makeInput = document.getElementById("car-make")
const modelInput = document.getElementById("car-model")
const carDropdown = document.getElementById("car-dropdown")
const yearInput = document.getElementById("car-year")


// NEW
const originDropdown = document.getElementById('origin-dropdown')
const originNameDropdown = document.getElementById('origin-name')

form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e) {
    e.preventDefault()

    CarApi.createCar()
    form.reset()
}
//callback function for cars list
CarApi.getCars()

//callback function for origins list
OriginApi.getOrigins()