class CarApi {
    // all variables and methods defined must be of type static in API level
    static baseURL = 'http://localhost:3000/cars'

    static getCars() {
        fetch(this.baseURL)
            .then(response => response.json())
            .then(data => {
                // debugger
                Car.all.forEach(car => {
                    const c = new Car(make: car.make, model: car.model, year: car.year, mileage: car.mileage)
                    c.attachToDom()
                })
            })
    }

    static createCar() {
        const formData = {
            make: makeInput.value,
            model: modelInput.value,
            year: yearDropdown.value,
            origin_id: dropdown.value
        }
    }

}