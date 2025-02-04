const URL = "https://v2.jokeapi.dev/joke/Any?type=twopart"

let joke = document.querySelector("#setup")
let del = document.querySelector("#delivery")
let refresh = document.querySelector(".refreser")

let getData = async () => {
    console.log("getting data...")
    let response = await fetch(URL)
    // console.log(response)
    let data = await response.json()
    // console.log(data)
    let plot = data.setup
    let delivery = data.delivery
    if (plot === undefined) {
        plot = "No joke found"
        delivery = "Ha ha hah..."
    }
    joke.innerText = plot
    del.innerText = delivery
}

getData()

refresh.addEventListener("click", () => {
    location.reload()
})






