class Car {

    static all = [];

    // NEW CONTAINER FOR CAR-LIST
    static container = document.getElementById('car-list')

    constructor({
        id,
        make,
        model,
        year,
        mileage,
        originID
    }) {
        this.id = id
        this.make = make
        this.model = model
        this.year = year
        this.mileage = mileage
        this.originID = originID
    }
}