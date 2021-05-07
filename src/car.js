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

        this.element.addEventListener('click', this.handleCarClick)

        Car.all.push(this)
    }

    render() {
        this.element.innerHTML = `
        <div data-id="${this.id}">
            $<strong class="make">${this.make}</strong>
            $<span class="model">${this.model}</span>
            $<span class="year">${this.year}</span>
            $<span class="mileage">${this.mileage}</span>
        `
        return this.element
    }
}