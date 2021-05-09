class Car {

    static all = []; // this variable gives us access to all of our Cars

    // NEW CONTAINER FOR CAR-LIST
    static container = document.getElementById('car-list')

    constructor({ id, make, model, year, mileage, originID }) { //use ES6 - destructuring to take actions out of object and immediately assign them to variables
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

    handleCarClick = (e) => {
        let action = e.target.innerText
        switch (action) {
            case action === "Edit":
                this.createEditFields(e.target)
                e.target.innerText = "Save"
                break
            case action === "Delete":
                this.deleteCar(e)
                break
            case action === "Save":
                this.saveUpdatedCar()
                e.target.innerText = "Edit"
                break
        }

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
    createEditFields = (editBtn) => {
        //access the object element
        const li = this.element
        const div = this.element.querySelector('div')

        // grab the values inside of car object and render them to input fields
        const make = li.querySelector('.make').innerText
        const model = li.querySelector('.model').innerText
        const year = li.querySelector('.year').innerText
        const mileage = li.querySelector('.mileage').innerText

        //update html and interpolate values 
        div.innerHTML = `
        <input type="text" name="make" class="edit-make" value="${make}">
        <input type="text" name="model" class="edit-model" value="${model}">
        <input type="number" name="year" class="edit-year" value="${year}">
        <input type="number" name="mileage" class="edit-mileage" min="0" max="999999" value="${mileage}">
        `
    }

    deleteCar = (e) => {
        this.element.remove() //occurs before fetch request
        CarApi.deleteCar(this.id) //move fetch to CarApi to prevent it from being separated
    }

    saveUpdatedCar = () => {

    }

    static filterByOrigin(filteredOrigin) {

        if (filteredOrigin) {
            for (const car of Car.all) {
                //convert (filteredOrigin.id) data type to match foreign key attribute (car.originID) to in order to prevent errors when comparing the attribute actions. In this case, we use parseInt(filteredOrigin.id) to convert the filteredOrigin.id data type from string to integer
                if (car.originID === parseInt(filteredOrigin.id)) {
                    car.element.style.display = ""
                } else {
                    car.element.style.display = "none"
                }
            }

        } else {
            Car.container.innerHTML = '' //use this to remove all cars from the DOM, to prevent duplicate entries.
            for (const car of Car.all) {
                car.attachToDom()
            }
        }
    }
}