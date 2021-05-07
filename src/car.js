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

        this.element = document.createElement('li')
        this.element.id = `car-${id}`
        this.element.dataset.id = id

        this.element.addEventListener('click', this.handleCarClick)

        Car.all.push(this)
    }


    renderLi() {
        this.element.innerHTML = `
        <div data-id="${this.id}">
            $<strong class="make">${this.make}</strong>
            <span class="model">${this.model}</span>
            <span class="year">${this.year}</span>
            <span class="mileage">${this.mileage}</span>
        </div>
        <button class="edit" data-id="${this.id}">Edit</button>
        <button class="delete" data-id="${this.id}">Delete</button>
    `
        return this.element
    }

    attachToDom() {
            list.appendChild(this.renderLi())
        }
        // Add a NEW car to the list


}