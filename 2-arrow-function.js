// const cuadrado = function(x) {
//     return x * x
// }

//const yargs = require("yargs")


// const cuadrado = (x) => x * x

// const cuadrado =  (x)=>
// console.log(cuadrado(3))

const evento = {
    nombre: 'Peda',
    listaInvitados: ['Vero', 'Fer', 'Carlos'],
    showlistaInvitados() {
        console.log('Lista de invitado para ' + this.nombre)

        this.listaInvitados.forEach((invitado) => {
            console.log(invitado + ' está invitado a ' + this.nombre);
        })
    }
}

evento.showlistaInvitados()