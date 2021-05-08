class CarApi {
    // all variables and methods defined must be of type static in API level
    static baseURL = 'http://localhost:3000/cars'

    static getCars() {
        fetch(this.baseURL)
            .then(response => response.json())
            .then(data => {
                data["data"].forEach(car => {
                    const c = new Car({ id: car.id, ...car.attributes }); //destructuring
                    c.attachToDom()
                })
            })
    }

    static createCar() {

    }

}