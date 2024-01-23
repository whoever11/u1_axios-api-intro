//we on our Front End(Client side) devices
//we have to use the fetch API to make requests to our server

//we will be making promises to our server to get data from our server and sent back a response
//most of api are in json format or json objects
//axios is a library that makes it easier to make http requests to our server
// THIS IS THE SCRIPT TO COPY <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

const myFunction = async () => {
    console.log('first')
    await axios.get('https://dog.ceo/api/breeds/list/all').then(function () {
      console.log('second')
    })
    console.log('third')
  }
  myFunction()