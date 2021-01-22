const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=3a3e7abf7ae1efb0d06be6aebaf03960&query=40,-75&units=m'


const regreso = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk)=>{
        data = data + chunk.toString()
        console.log(chunk);
    })
    response.on('end',()=>{
        const datos = JSON.parse(data);
        console.log(datos);
    })
})

regreso.on('error',(error)=>{
console.log('Tenemor un error',error);
})

regreso.end()