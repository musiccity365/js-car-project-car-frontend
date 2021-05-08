class OriginApi {
    // all variables and methods defined must be of type static in API level
    static baseURL = 'http://localhost:3000/origins'
    static getOrigins() {
        fetch(this.baseURL)
            .then(response => response.json())
            .then(json => {
                json["data"].forEach(element => {
                    const o = new Origin({ id: element.id, ...element.attributes }) //implementation of destructuring for all element attributes.
                    o.addToDom()
                    o.addToDropdown()
                })
            })
    }
}