"use strict"

fetch("http://swapi.dev/api/planets/1/")
.then(response => response.json())
.then(data => console.log(data))

const getData  = async () => {
    const promise = await fetch ("http://swapi.dev/api/planets/80")

    if(!promise.ok) {
        throw "err"
    }
    return await promise;
}



getData()
.then(response => response.json())
.then(data => console.log(data))
.catch(data => console.log(data))