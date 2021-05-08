class CarApi {

    static baseURL = 'http://localhost:3000/cars'

    static getCars() {
        fetch(this.baseURL)
            .then((resp) => {})
    }

}