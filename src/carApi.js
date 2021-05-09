class CarApi {
    // all variables and methods defined must be of type static in API level
    static baseURL = 'http://localhost:3000/cars'

    static getCars() {
        fetch(this.baseURL)
            .then(response => response.json())
            .then(data => {
                // debugger
                Car.all.forEach(car => {
                    const c = new Car({
                        id: car.id,
                        make: car.attributes.make,
                        model: car.attributes.model,
                        year: car.attributes.year,
                        mileage: car.attributes.mileage
                    })
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