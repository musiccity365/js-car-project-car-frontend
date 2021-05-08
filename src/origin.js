class Origin {
    static all = []

    static originContainer = document.getElementById('origin-container')

    constructor() {
        this.id = id
        this.name = name
        this.active = false

        this.element = document.createElement('button')

        Origin.all.push(this)
    }

    cars() {
        return Car.all.filter((car) => car.originID === parseInt(this.id))
    }

    render() {
        this.element.innerText = this.name
        this.element.id = `origin-${this.id}`
        return this.element
    }

    addToDom() {
        Origin.originContainer.append(this.render())
        this.addListeners()
    }

    addListeners() {
        this.element.addEventListener('click', this.setActiveOrigin)
    }

    setActiveOrigin(e) {
        let filteredOrigin

        Origin.all.forEach(o => {
            if (o.element === this.element && !this.active) {
                o.element.classList.add('active')
                o.active = true
                filteredOrigin = o
            } else {
                o.element.classList.remove('active')
                o.active = false
            }

        })
        Car.filterByOrigin(filteredOrigin)
    }

    addToDropdown() {
        const region = doc.createElement('region') //selects dropdown
        region.value = this.id //creates the actual value for region id
        region.innerText = this.name
        dropdown.append(region)
    }
}