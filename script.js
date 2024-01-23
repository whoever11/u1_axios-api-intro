//we on our Front End(Client side) devices
//we have to use the fetch API to make requests to our server

//we will be making promises to our server to get data from our server and sent back a response
//most of api are in json format or json objects
//axios is a library that makes it easier to make http requests to our server
// THIS IS THE SCRIPT TO COPY <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

const getBreeds = async () => {
    const dogBreeds = await axios.get('https://dog.ceo/api/breeds/list/all')
    console.log(dogBreeds.data.message)
    }
    getBreeds()

    const button=  document.querySelector('button')
    const breedInput= document.querySelector('input')
    const imageDiv= document.querySelector('div')


    button.addEventListener(`click`, async (event) => {
        event.preventDefault()
        let breed = breedInput.value
        console.log
        let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        console.log(response.data.message)
        let dogPic = response.data.message
        imageDiv.innerHTML = `<img src="${dogPic}"/>`
    })

